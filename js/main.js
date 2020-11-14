// import your packages here
import { fetchData, postData } from "./modules/TheDataMiner.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');
  
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }



    function retrieveProjectInfo(event) {
        // test for an ID
        //check for an id, and if there isn't one, then don't try the fetch call
        if (!event.target.id) {return}

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
      
    }    



    function renderPortfolioThumbnails(thumbs) {
        let userSection = document.querySelector('.user-section'),
            favoriteTemplate = document.querySelector('#favorite_template').content;

        for (let favorite in thumbs) {

            let currentFavorite = favoriteTemplate.cloneNode(true),
                currentFavoriteText = currentFavorite.querySelector('.favorite').children;

            currentFavoriteText[1].src = `images/${thumbs[favorite].image}`;
            currentFavoriteText[1].id = thumbs[favorite].id;
        
            // add this new user to the view
            userSection.appendChild(currentFavorite);

        }

        userSection.addEventListener("click",retrieveProjectInfo );
       
    }


    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));
   
})();