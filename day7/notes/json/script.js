/* JSON containing an array of video objects */
var videos = [
  {
    "youtubeId":"Tj_0zcOlb4M",
		"title":"The Good Place",
		// my code
		"author":"TV Promos",
		"favorite": false
  },
  {
    "youtubeId":"epUk3T2Kfno",
		"title":"Otters holding hands",
		// my code
		"author":"Otters holding hands",
		"favorite": false
		
  },
  {
    "youtubeId":"iJ4T9CQA0UM",
		"title":"Guy On A Buffalo",
		// my code
		"author":"Jomo & The Possum Posse",
		"favorite": false
	},
	{
		"youtubeId":"b9sycdSkngA",
		"title":"Disney's Biggest Mistake",
		// my code
		"author":"BREADSWORD",
		"favorite": true
	}
];


/* Create a div to hold the video player */
var body = document.getElementsByTagName('body')[0]; //Get the body
var videoWatcher = document.createElement('div'); //Create a new div
videoWatcher.id = 'video-watcher'; //Assign the div and ID
body.appendChild(videoWatcher); //Append the new ID to the body
var playerContainer = document.getElementById('video-watcher'); //Select the new div and store it in a variable for use later.


/* Function that adds each video from the JSON to the list of videos */

var addVideoToList = function(video) {
	/* Get the list of all the videos */
	var videoList = document.getElementById('videos-list');

	/* Create the elements we'll need. */
	var videoLink = document.createElement('a'); //Create a link
	var videoTitle = document.createTextNode(video.title); //Create a text node with the video title
	var videoThumb = document.createElement('img'); //Create an image for the video thumbnail
	var videoItem = document.createElement('li'); //Create a list item to add to the list of videos

	var thumbnailURL = youtube.generateThumbnailUrl(video.youtubeId); //Get the URL of the video thumbnail
	videoThumb.src = thumbnailURL; //Set the src attribute of the image
	videoLink.appendChild(videoThumb); //Append the image to the link
	videoLink.appendChild(videoTitle); //Append the video title to the link
	videoItem.appendChild(videoLink); //Append the video link to the list item
	videoList.appendChild(videoItem); //Append the list item to the list of videos

	if(video.favorite==true) {
		videoLink.style.backgroundColor = "pink";
	}

	/* Add our event handler to play the video we want to watch */
	videoLink.addEventListener('click', function(e){
		e.preventDefault(); //Prevent the browser's default click behavior
		
		// my code
		var videoHeader = document.createElement('h2'); //create h2 for embedded video
		videoHeader.innerHTML = video.title + " by " + video.author; 

		var videoEmbed = document.createElement('iframe'); //Create an iframe
		videoEmbed.src = youtube.generateEmbedUrl(video.youtubeId); //Set the src to the video
		videoEmbed.width = 560; //Set the width of the video iframe
		videoEmbed.height = 315; //Set the height of the video iframe

		playerContainer.innerHTML = ''; //Erase any previously appended items from the video player div

		// my code
		playerContainer.appendChild(videoHeader);

		playerContainer.appendChild(videoEmbed); //Append the new iframe we just created
	});
}

/* Loop through all the videos in the JSON and add each to the list of videos */
for (var i=0; i<videos.length; i++) {
	addVideoToList(videos[i]);
}



