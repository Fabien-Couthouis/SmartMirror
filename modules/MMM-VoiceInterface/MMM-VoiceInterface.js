/* Magic Mirror
 * Module: MMM-VoiceInterface
 *
 * By Fabien Couthouis
 */

Module.register("MMM-VoiceInterface",{
	// Microphone icon
	icon: 'fa-microphone',

	// Default module config.
	defaults: {
	},

	getStyles() {
		return ['font-awesome.css', 'MMM-VoiceInterface.css'];
	},
	
	start() {
		Log.info("Starting module: " + this.name);
		this.pulsing = false;
		this.text = " Prêt";
		this.intervalTime = 0;
		console.log(this.intervalTime);
		
		let self = this;
		
		setInterval(function() {
			self.resetDefaultIfNedded();
			self.updateDom();
		}, 1000);
	},
	
	//Reset text every 40s if it isn't " Prêt"
	resetDefaultIfNedded(){
		if (this.intervalTime === 39){
			this.intervalTime = 0;
			this.pulsing = false;
			this.text = " Prêt";
		}
		else {
			if (this.text != " Prêt"){
				this.intervalTime++;
			}
		}
	},
	
	
	getDom() {
		const wrapper = document.createElement('div');	
		const icon = document.createElement('i');
		icon.classList.add('fa', this.icon, 'icon');
			
		if (this.pulsing){
			wrapper.classList.add('pulse');			
		}
		
		const text = document.createElement('span');
		text.textContent = this.text;
		wrapper.appendChild(icon);
		wrapper.appendChild(text);
		// Return the wrapper to the dom.
		return wrapper;
	},
	
	notificationReceived(notification, payload, sender) {
		console.log("Notification received from " + this.name + " : " + notification);
		switch(notification) {
			case "START_LISTENING":
				console.log('LISTEN');
				this.pulsing = true;
				this.text = " J'écoute";
				break;
			case "ORDER_FOUND":
				this.pulsing = false;
				this.text = " Prêt";
				break;
			case "ORDER_NOT_FOUND":
				this.pulsing = false;
				this.text = " Je n'ai pas compris";
				break;
			}
		},
		
});

