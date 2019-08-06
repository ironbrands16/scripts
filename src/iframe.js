/* eslint-env browser */

(function(hostname) {
  var win = window
  var con = win.console
  var json = JSON
  var stringify = json.stringify
  var userAgent = win.navigator.userAgent

  // A simple log function so the user knows why a request is not being send
  var warn = function(message) {
    if (con && con.warn) con.warn('Simple Analytics: ' + message);
  }

  // Test for sessionStorage
  var storage
  try {
    var uid = new Date
    (storage = window.sessionStorage).setItem(uid, uid)
    var fail = storage.getItem(uid) !== uid
    storage.removeItem(uid)
    fail && (storage = false)
  } catch (e) {}

  // Stop if not supported
  if (!storage) return

  var getEvents = function() { return json.parse(storage.getItem('events') || '[]') }
  var saveEvents = function(events) { return storage.setItem('events', stringify(events) || '[]') }

  window.addEventListener('message', function(message) {
    if (!message.data || !message.data.event) return

    var event = message.data.event.toLowerCase().replace(/[^a-z0-9._-]+/gi, '_').replace(/(^_|_$)/, '') || 'invalid'
    var ref = message.data.ref
    var campaign = message.data.campaign

    var events = getEvents()
    var firstEvent = events[0] || { v: 1, ref: ref, campaign: campaign, date: new Date().toISOString().slice(0, 10) }
    if (!events.length) events.push(firstEvent)

    // var days = Math.floor((new Date().getTime() - new Date(events[0].date + 'T00:00:00').getTime()) / 86400000)
    // events.push(days ? [event, days] : [event])
    events.push(event)

    saveEvents(events)
    post({ v: firstEvent.v, ref: firstEvent.r, date: firstEvent.date, events: events.slice(1), hostname: /\.(.+)/.exec(hostname)[1], ua: userAgent })
  }, false)

  var post = function(data) {
    var request = new XMLHttpRequest()
    request.open('POST', '//' + hostname + '/events', true)

    // We use content type text/plain here because we don't want to send an
    // pre-flight OPTIONS request
    request.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8')
    request.send(stringify(data))
  }
})('simpleanalytics.example.com')