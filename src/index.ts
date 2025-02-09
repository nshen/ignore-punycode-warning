process.removeAllListeners('warning');
process.on('warning', (e) => {
  if (e.name !== 'DeprecationWarning' || !e.message.includes('punycode')) {
    console.warn(e);
  }
});
