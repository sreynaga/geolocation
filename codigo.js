Ext.setup({
	onReady: function () {

		var myStore = new Ext.data.Store({
			proxy : {
				type: "rest",
				url: "addLocation.php",
				extraParams : {
					latitude: "",
					longitude: "",
					accuracy: ""
				}
			}
		});

		var getMyPosition = function (myPosition) {
			alert(myPosition.coords.latitude + ', ' + myPosition.coords.longitude + ', Accuracy: ' + myPosition.coords.accuracy);
			myStore.getProxy().extraParams.latitude = myPosition.coords.latitude;
			myStore.getProxy().extraParams.longitude = myPosition.coords.longitude;
			myStore.getProxy().extraParams.accuracy = myPosition.coords.accuracy;
			myStore.load();
			var myPosition = new google.maps.LatLng(myPosition.coords.latitude, myPosition.coords.longitude);
			myMap.update(myPosition);
		}

		var myTopBar = new Ext.Toolbar({
			dock: "top",
			title: "Geolocation"
		});

		var myButtom = new Ext.Button({
			text: "Send Location",
			handler: function() {
				navigator.geolocation.getCurrentPosition(getMyPosition);
			}
		});

		var myToolBar = new Ext.Toolbar({
			dock: "top",
			items: [myButtom]
		});

		var myMap = new Ext.Map({

		});

		var myPanel = new Ext.Panel({
			fullscreen: true,
			dockedItems: [myTopBar, myToolBar],
			items: [myMap]
		});

	}
});