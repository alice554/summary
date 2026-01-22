<template></template>

<script>
  import { fetchEventSource } from '@microsoft/fetch-event-source';

export default {
methods: {

async function startEventSource() {
this.output = 'Starting stream...\n'
      this.controller = new AbortController()
 try {
  await fetchEventSource('https://example.com/sse-endpoint', {
    method: 'POST', // or 'GET'
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token'
    },
    body: JSON.stringify({ key: 'value' }), // optional, for POST requests
 signal: this.controller.signal,
    onopen(response) {
      // Called when the connection is successfully opened
      if (response.ok) {
        console.log('Connection opened successfully');
      } else {
        throw new Error('Failed to open connection');
      }
    },
    onmessage(event) {
      // Called when a message is received
      console.log('Received message:', event.data);
 this.output += `${event.data}\n`
            this.$nextTick()
    },
    onclose() {
      // Called when the connection is closed
      console.log('Connection closed');
    },
    onerror(err) {
      // Called when an error occurs
      console.error('Error:', err);
      // You can return a specific retry interval (in milliseconds) or throw to stop retrying
      return 5000; // Retry after 5 seconds
    },
 // 可选：设置超时时间
  signal: AbortSignal.timeout(5000), // 5秒超时



  });
} catch (err) {
        this.output += `\nError: ${err.message}`
      }

},

 abortStream() {
      if (this.controller) {
        this.controller.abort()
        this.output += '\nStream aborted by user'
      }
    },

beforeDestroy() {
    this.abortStream()
  },

startEventSource();
}
}
</script>

<style>
</style>