window.data = {

    filterByConside: (dataMovieList, letterValue) => {
        console.log(dataMovieList)
        const searConside = dataMovieList.filter(dataMovieList => (dataMovieList.Title.toLowerCase().match(letterValue.toLowerCase())));
        console.log(searConside)
        return searConside;
      }



    
// orderData: (dataMovie, sortBy, sortOrder) => {
// dataMovie.map (element => {
//     let element;
// return element.Title;

// });

// if (sortOrder == 'asc') {
//     return data.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1 );
// }

// }
    

};