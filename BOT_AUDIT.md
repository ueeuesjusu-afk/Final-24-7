# Bot Audit

All JavaScript files passed `node --check`.

## Bot-side configuration
- Movement: enabled
- Circle/waypoint radius: 7 blocks
- Movement interval: 4000 ms
- Look-around: enabled / 7000 ms
- Random jump: enabled / 20000 ms
- Stuck recovery: retained
- Auto reconnect: enabled / 5s initial / 60s maximum
- Chat spam: disabled

## Connection settings
Connection-related values were not intentionally changed by this audit. Their actual keys are preserved from the source project.

## Files reviewed
- `.gitignore`
- `FINAL_SETTINGS_VERIFIED.txt`
- `README_IMPROVEMENTS.md`
- `dependabot.yml`
- `index.js`
- `launcher_accounts.json`
- `leaveRejoin.js`
- `logger.js`
- `package-lock.json`
- `package.json`
- `settings.json`
