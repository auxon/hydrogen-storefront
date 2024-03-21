import { ready, ChannelManager } from 'xjs';

ready().then(function() {
  ChannelManager.on('stream-start', function() {
    document.getElementById('stream-status').innerHTML = 'Stream is Live';
  });

  ChannelManager.on('stream-end', function() {
    document.getElementById('stream-status').innerHTML = 'Stream is not Live';
  });
})
