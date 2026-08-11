function setupLeaveRejoin(bot) {
  // This module intentionally does not schedule timed disconnects/rejoins.
  // Connection recovery should be handled by the main bot's normal error/end
  // handlers. This keeps the module safe and predictable for normal gameplay.
  const stop = () => {
    try {
      if (bot && typeof bot.clearControlStates === "function") {
        bot.clearControlStates();
      }
    } catch (_) {}
  };

  bot.once("end", stop);
  bot.once("kicked", stop);
  bot.once("error", stop);

  return { stop };
}

module.exports = setupLeaveRejoin;
