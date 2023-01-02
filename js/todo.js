function fetData() {
    fetch(
    }.then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);}