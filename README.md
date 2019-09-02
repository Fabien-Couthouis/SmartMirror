# SmartMirror: personnal configuration for MagicMirror 

[Project website (in french)](https://smartmirrorweb-fjtmc4jqk.now.sh/index.php)

**SmartMirror** contains a preconfigured installation of both [MagicMirror](https://github.com/MichMich/MagicMirror) and the 
"voice controlled personal assistant" [Kalliope](https://github.com/kalliope-project/kalliope/blob/master/Docs/installation.md).
SmartMirror is built to work on Raspberry 3 (older Raspberries are not recommended due to the lack of power for using Kalliope) and debian-based Linux distributions like Ubuntu,
Linux Mint or Debian. The only supported language is french.
You can find demonstration videos [on the website repository](https://github.com/Fabien-Couthouis/smartmirror_web/tree/master/assets/videos).


### Installation

1. Download and install the latest Node.js version.
2. Clone the repository and check out the master branch: `git clone https://github.com/Fabien-Couthouis/SmartMirror`
3. Enter the repository: `cd ~/SmartMirror`
4. Install MagicMirror: `npm install`
5. Install Kalliope. See the [official doc](https://github.com/kalliope-project/kalliope/blob/master/Docs/installation.md)

### Launching
1. Enter the repository: `cd ~/SmartMirror`
2. Launch the mirror : 'npm start'
3. Enter in the Kalliope repository (with an alt-tab to leave the mirror display) : `cd ~/kalliope`
4. Launch Kalliope : 'kalliope start'

### Voice commands
Only language supported here is french.
- Kalliope use a trigger word to wake up the mirror. More information [here](https://github.com/kalliope-project/kalliope/blob/master/Docs/settings.md).
- Actual trigger word is 'Mirror'
- After the trigger word, Kalliope is listening for an order.

List of orders :

|Order                                       | Function        |
------------------------------------------|----------------|
"Affiche la météo de la semaine" | Display meteo of the current week  
"Affiche moi la météo de la semaine"| /
"Montre moi la météo de la semaine" |  /         
"Montre-moi la météo de la semaine" |  /               
"Montrer les actualités"    | Display news    
"Montre les actualités"    |   /              
"Montre moi les actualités"  |  /               
"Montre-moi les actualités"  |   /              
"Voyons les actualités"    |   /              
"Fait voir les actualités"     |   /              
"Cache les actualités"   | Hide news       
"Vire les actualités"  |       /          




### Update


```bash
git pull && npm install
```

**Important for Raspberry users:** `npm start` does **not** work via SSH, use `DISPLAY=:0 nohup npm start &` instead. This starts the mirror on the remote display.

**Note:** if you want to debug on Raspberry Pi you can use `npm start dev` which will start the MagicMirror app with Dev Tools enabled.

