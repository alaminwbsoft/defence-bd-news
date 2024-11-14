
let cachedTopNavbarData = null;
let cachedMainNewsData = null;


export const fetchtopnavbarData = async () => {
  if (cachedTopNavbarData) return cachedTopNavbarData;

  try {
    const res = await fetch('https://admin.bangladeshdefencevoice.com/api/get-hompage-data');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    cachedTopNavbarData = data.topNavbarNewsData || []; // Store only topNavbarNewsData
  
    return cachedTopNavbarData;
    
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchmainewsData = async () => {
  if (cachedMainNewsData) return cachedMainNewsData;

  try {
    const res = await fetch('https://admin.bangladeshdefencevoice.com/api/get-hompage-data');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    cachedMainNewsData = data.mainNewsData ? [data.mainNewsData] : []; // Wrap in array if it's an object
    return cachedMainNewsData;
  } catch (error) {
    console.error(error);
    return null;
  }
};



let slidernewsdata = null;

export const fetchslidernewsData = async () => {
  if (slidernewsdata) return slidernewsdata;

  try {
    const res = await fetch('https://admin.bangladeshdefencevoice.com/api/get-hompage-data');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    slidernewsdata = data.sliderNewsData || [];
    
    return slidernewsdata;
  } catch (error) {
    console.error(error);
    return null;
  }
};


let primarynewsdata = null;

export const fetchprimarynewsdata = async () => {
  if (primarynewsdata) return primarynewsdata;

  try {
    const res = await fetch('https://admin.bangladeshdefencevoice.com/api/get-hompage-data');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    primarynewsdata = data.primaryNewsData || [];
    
    return primarynewsdata;
  } catch (error) {
    console.error(error);
    return null;
  }
};

let normalnewsdata = null;

export const fetchnormalnewsdata = async () => {
  if (normalnewsdata) return normalnewsdata;

  try {
    const res = await fetch('https://admin.bangladeshdefencevoice.com/api/get-hompage-data');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    normalnewsdata = data.normalNewsData || [];
    
    return normalnewsdata;
  } catch (error) {
    console.error(error);
    return null;
  }
};

let catnewsdata = null;

export const fetchcatnewsdata = async () => {
  if (catnewsdata) return catnewsdata;

  try {
    const res = await fetch('https://admin.bangladeshdefencevoice.com/api/get-hompage-data');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    catnewsdata = data.categoryWiseNewsData || [];
    
    return catnewsdata;
  } catch (error) {
    console.error(error);
    return null;
  }
};