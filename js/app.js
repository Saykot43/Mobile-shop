const btnSubmit = () =>{
    document.getElementById("searchResult").innerHTML = "";
    document.getElementById("phoneDetails").innerHTML = "";
    const input = document.getElementById('inputField').value;
    const url =`https://openapi.programming-hero.com/api/phones?search=${input}`
    fetch(url)
    .then(res => res.json())
    .then(data => showPhone(data.data.slice(0,20)));

    document.getElementById('inputField').value="";
};

const showPhone = data =>{
    const searchResult = document.getElementById('searchResult');
    // console.log(data);

    data.forEach(phones => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML =`
        <div class="row row-cols-1 row-cols-md-3 g-4 mb-3">
        <div class="card m-4" style="width: 18rem; ">
        <img src="${phones.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phones.phone_name}</h5>
          <div onclick="details('${phones.slug}')" class="btn btn-info">Details</div>
        </div>
      </div>
        `
        searchResult.appendChild(div);
    })
};

const details = (id)=> {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data.data));
};

const showDetails =(show) =>{
  // console.log(show.mainFeatures);
  document.getElementById("phoneDetails").innerHTML = "";
  const phoneDetail = document.getElementById('phoneDetails');
  const div = document.createElement('div');
  div.innerHTML=`
  <div class="card" style="width: 18rem;">
  <img src="${show.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name: ${show.name}</h5>
    <p class="card-text">Brand: ${show.brand}</p>
    <p class="card-text">Storage: ${show.mainFeatures.storage}</p>
    <p class="card-text">DisplaySize: ${show.mainFeatures.displaySize}</p>
    <p class="card-text">ChipSet: ${show.mainFeatures.chipSet}</p>
    <p class="card-text">Memory: ${show.mainFeatures.memory}</p>
    <p class="card-text">Sensors: ${show.mainFeatures.sensors}</p>
    <p class="card-text">ReleaseDate: ${show.releaseDate}</p>
    <p class="card-text">WLAN: ${show.others.WLAN}</p>
    <p class="card-text">Bluetooth: ${show.others.Bluetooth}</p>
    <p class="card-text">GPS: ${show.others.GPS}</p>
    <p class="card-text">NFC: ${show.others.NFC}</p>
    <p class="card-text">Radio: ${show.others.Radio}</p>
    <p class="card-text">USB: ${show.others.USB}</p>
  </div>
</div>
  
  `
  phoneDetail.appendChild(div);

}