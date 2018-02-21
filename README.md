![SmartMirror: personnal configuraton for MagicMirror ](.github/header.png)


**MagicMirror²** is an open source modular smart mirror platform. With a growing list of installable modules, the **MagicMirror²** allows you to convert your hallway or bathroom mirror into your personal assistant. More information on [MagicMirror](https://github.com/MichMich/MagicMirror/).

### Manual Installation

1. Download and install the latest Node.js version.
2. Clone the repository and check out the master branch: `git clone https://github.com/Fabien-Couthouis/SmartMirror`
3. Enter the repository: `cd ~/MagicMirror`
4. Install and run the app: `npm install && npm start`

**Important for Raspberry users:** `npm start` does **not** work via SSH, use `DISPLAY=:0 nohup npm start &` instead. This starts the mirror on the remote display.

**Note:** if you want to debug on Raspberry Pi you can use `npm start dev` which will start the MagicMirror app with Dev Tools enabled.

### Raspberry Configuration & Auto Start.

The following wiki links are helpful in the configuration of your MagicMirror² operating system:
- [Configuring the Raspberry Pi](https://github.com/MichMich/MagicMirror/wiki/Configuring-the-Raspberry-Pi)
- [Auto Starting MagicMirror](https://github.com/MichMich/MagicMirror/wiki/Auto-Starting-MagicMirror)

### Update

If you want to update your MagicMirror² to the latest version, use your terminal to go to your Magic Mirror folder and type the following command:

```bash
git pull && npm install
```
