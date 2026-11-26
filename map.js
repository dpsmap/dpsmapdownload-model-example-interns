// Dropdown behavior
const dropdownInitialLabels = {
  mapText: "Myanmar Map",
  districtText: "District",
  regionText: "Region and State",
  townshipText: "Township",
  cityText: "City"
};
function resetDropdownLabel(id) {
  document.getElementById(id).textContent = dropdownInitialLabels[id];
}
function toggleDropdown(id) {
  const current = document.getElementById(id);
  const isOpen = current.classList.contains("show");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
  if (!isOpen) current.classList.add("show");
}
function selectOption(id, value) {
  document.getElementById(id).textContent = value;
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
const districtImages = {
  "Hmawbi":"Hmawbi_DT_oveall.jpg", "Dagon Myothit":"ဒဂုံမြို့သစ်ခရိုင်.jpg", "Insein":"အင်းစိန်ခရိုင်.jpg",
  "Kamayut":"ကမာရွတ်ခရိုင်.jpg", "Twante":"တွံတေးခရိုင် ၂.png", "Botahtaung":"ဗိုလ်တထောင်ခရိုင်_.jpg",
  "Mingaladon":"မင်္ဂလာဒုံခရိုင်.jpg", "Kyaukse":"Kyaukse_DT_overall.jpg", "Nyaung-U":"ညောင်ဦးခရိုင်.jpg",
  "Myingyan":"မြင်းခြံခရိုင်.jpg", "Pyin Oo Lwin":"ပြင်ဦးလွင်ခရိုင်.jpg", "Maubin":"မအူပင်ခရိုင်.jpg",
  "Kyonpyaw":"ကျုံပျော်ခရိုင်.jpg", "Thayet":"သရက်ခရိုင်.jpg", "Katha":"ကသာခရိုင်.jpg",
  "Shwebo":"ရွှေဘိုခရိုင်.jpg", "Bokpyin":"ဘုတ်ပြင်းခရိုင်.jpg", "Bhamo":"ဗန်းမော်ခရိုင်.jpg",
  "Myitkyina":"မြစ်ကြီးနားခရိုင်.jpg", "Tiddim":"တီးတန်.jpg", "Minn Buu":"Minn Buu District.jpg"
};
const cityFolder = "city-images/city/မြို့/";
const cityImages = {
  "Taikkyi": cityFolder + "ရန်ကုန်တိုင်း/တိုက်ကြီးမြို့.jpg",
  "Yangon": cityFolder + "ရန်ကုန်တိုင်း/ရန်ကုန်မြို့.jpg",
  "Hmawbi": cityFolder + "ရန်ကုန်တိုင်း/မှော်ဘီ.jpg",
  "Mandalay": cityFolder + "မန္တလေးတိုင်း/The map of mandalay.jpg",
  "Pyin Oo Lwin": cityFolder + "မန္တလေးတိုင်း/ပြင်ဦးလွင်.jpg",
  "Meiktila": cityFolder + "မန္တလေးတိုင်း/မိတ္ထီလာမြို့.jpg",
  "Bagan": cityFolder + "မန္တလေးတိုင်း/Bagan.jpg",
  "Pathein": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/ပုသိမ်.jpg",
  "Hinthada": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/ဟင်္သတမြို့.jpg",
  "Maubin": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/မအူပင်မြို့.jpg",
  "Mawlamyinegyun": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/မော်လမြိုင်ကျွန်းမြို့.jpg",
  "Pyapon": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/ဖျာပုံမြို့.jpg",
  "Seikphyu": cityFolder + "မကွေးတိုင်း/ဆိပ်ဖြုမြို့.jpg",
  "Magway": cityFolder + "မကွေးတိုင်း/မကွေးမြို့.jpg",
  "Salin": cityFolder + "မကွေးတိုင်း/စလင်းမြို့.jpg",
  "Bago": cityFolder + "ပဲခူးတိုင်း/Bago.jpg",
  "Pyinzaluoke": cityFolder + "ပဲခူးတိုင်း/ပိန်းဇလုပ်မြို့.jpg",
  "Minhla": cityFolder + "ပဲခူးတိုင်း/မင်းလှမြို့.jpg",
  "Pyay": cityFolder + "ပဲခူးတိုင်း/ပြည်မြို့.jpg",
  "Taungoo": cityFolder + "ပဲခူးတိုင်း/တောင်ငူမြို့.jpg",
  "Yedashe": cityFolder + "ပဲခူးတိုင်း/ရေတာရှည်.jpg",
  "Naypyidaw": cityFolder + "နေပြည်တော်/Naypyitaw.png",
  "Sagaing": cityFolder + "စစ်ကိုင်းတိုင်း/saging.jpg",
  "Banmauk": cityFolder + "စစ်ကိုင်းတိုင်း/ဗန်မောက်မြို့.jpg",
  "Shwebo": cityFolder + "စစ်ကိုင်းတိုင်း/ရွှေဘိုမြို့.jpg",
  "Myitkyina": cityFolder + "ကချင်ပြည်နယ်/မြစ်ကြီးနားမြို့.png",
  "Mawlamyine": cityFolder + "မွန်ပြည်နယ်/မော်လမြိုင်မြို့.jpg",
  "Sittwe": cityFolder + "ရခိုင်ပြည်နယ်/စစ်တွေမြို့.jpg",
  "Taunggyi": cityFolder + "ရှမ်းပြည်နယ်/Shan State Towngyi.jpg",
  "Hopong": cityFolder + "ရှမ်းပြည်နယ်/ဟိုပုံးမြို့.jpg",
  "Nyaungshwe": cityFolder + "ရှမ်းပြည်နယ်/ညောင်ရွှေ.jpg",
  "Loilen": cityFolder + "ရှမ်းပြည်နယ်/လွိုင်လင်_.jpg",
  "Hsi Hseng": cityFolder + "ရှမ်းပြည်နယ်/ဆီဆိုင်_.jpg",
  "Kalaw": cityFolder + "ရှမ်းပြည်နယ်/ကလော.jpg",
   "Pindaya": cityFolder + "ရှမ်းပြည်နယ်/ပင်းတယ.jpg",
  "Kengtung": cityFolder + "ရှမ်းပြည်နယ်/ကျိုင်းတုံမြို့.jpg",
  "Tachileik": cityFolder + "ရှမ်းပြည်နယ်/တာချီလိတ်.jpg",
  "Kokang Self-Administered Zone": cityFolder + "ရှမ်းပြည်နယ်/ကိုးကန့်ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရဒေသ.jpg",
  "Lashio": cityFolder + "ရှမ်းပြည်နယ်/လားရှိုး.jpg"
};
const cityMapTitles = {
  "Kokang Self-Administered Zone": "Kokang Self-Administered Zone"
};
let currentMapLanguage = "en";
let currentMapSource = "assets/maps/myanmar-english.jpg";
function showUnavailableMap(title, showPopup = true) {
  const image = document.getElementById("selectedImage");
  image.onerror = null;
  image.hidden = true;
  currentMapSource = "";
  document.getElementById("mapDialog").classList.remove("download-flow-only", "has-region-brief");
  document.getElementById("regionBrief").hidden = true;
  document.getElementById("imageTitle").textContent = title;
  document.getElementById("imageCaption").textContent = "No map image is available for this selection.";
  document.getElementById("imageCaption").hidden = false;
  document.getElementById("downloadActions").hidden = true;
  document.getElementById("paidDownloadChoices").hidden = true;
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("freeDownloadForm").hidden = true;
  document.getElementById("requestDownloadForm").hidden = true;
  document.getElementById("downloadFormStatus").textContent = "";
  const dialog = document.getElementById("mapDialog");
  if (showPopup && !dialog.open) {
    dialog.showModal();
    document.body.classList.add("map-dialog-open");
  }
}
function setImage(src, title, caption, alt, showPopup = true, briefType = title === "Yangon Region Map" ? "region" : "") {
  const dialog = document.getElementById("mapDialog");
  const showRegionBrief = Boolean(briefType);
  dialog.classList.remove("download-flow-only");
  dialog.classList.toggle("has-region-brief", showRegionBrief);
  document.getElementById("regionBrief").hidden = !showRegionBrief;
  document.querySelector("#regionBrief li").textContent = briefType === "state" ? "ပြည်နယ်မြို့တော်" : "တိုင်းဒေသကြီးမြို့တော်";
  const image = document.getElementById("selectedImage");
  image.hidden = false;
  document.getElementById("imageCaption").hidden = false;
  image.onerror = () => {
    if (currentMapSource === src) showUnavailableMap(title, false);
  };
  currentMapSource = src;
  image.src = src;
  image.alt = alt;
  document.getElementById("imageTitle").textContent = title;
  document.getElementById("imageCaption").textContent = caption;
  document.getElementById("downloadActions").hidden = false;
  document.getElementById("paidDownloadChoices").hidden = true;
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("freeDownloadForm").hidden = true;
  document.getElementById("requestDownloadForm").hidden = true;
  document.getElementById("downloadFormStatus").textContent = "";
  if (showPopup && !dialog.open) {
    dialog.showModal();
    document.body.classList.add("map-dialog-open");
  }
}
function selectMap(language) {
  currentMapLanguage = language;
  const label = language === "my" ? "Myanmar" : "English";
  resetDropdownLabel("mapText");
  const caption = language === "my" ? "မြန်မာနိုင်ငံမြေပုံ" : "Map of Myanmar";
  setImage(`assets/maps/myanmar-${language === "my" ? "burmese" : "english"}.jpg`, label + " — Myanmar Map", caption, caption);
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
function openPopularMap(name, imagePath) {
  const isRegionMap = imagePath.startsWith("assets/regions/");
  const briefType = isRegionMap ? (name.endsWith(" State") ? "state" : "region") : "";
  setImage(imagePath, name + " Map", "Popular map for " + name, name + " map", true, briefType);
}
function showPlace(name, type) {
  const folder = type === "district" ? "districts/Districts/" : "cities/";
  const file = type === "district" ? districtImages[name] : cityImages[name];
  const title = type === "district" ? name + " District" : cityMapTitles[name] || name + " City";
  if (file) setImage("assets/" + folder + encodeURI(file), title, "Map for " + name, title);
  else showUnavailableMap(title);
  resetDropdownLabel(type + "Text");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
function selectDistrict(name) { showPlace(name, "district"); }
function selectCity(name) { showPlace(name, "city"); }
document.addEventListener("click", event => {
  if (!event.target.closest(".dropdown")) document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
});



// Region and township data from reto.zip.
const regionMaps = {
      "Yangon Region": [["assets/regions/yangon.jpg", "Yangon Region"], ["assets/regions/yangon-overview.png", "Yangon Region overview map"]],
      "Mandalay Region": [["assets/regions/mandalay.jpg", "Mandalay Region"]],
      "Naypyidaw Union Territory": [["assets/regions/naypyidaw.jpg", "Naypyidaw Union Territory"]],
      "Ayeyarwady Region": [["assets/regions/ayeyarwady.jpg", "Ayeyarwady Region"]],
      "Bago Region": [["assets/regions/bago.jpg", "Bago Region"]],
      "Chin State": [["assets/regions/chin.jpg", "Chin State"]],
      "Kachin State": [["assets/regions/kachin.jpg", "Kachin State"]],
      "Kayah State": [["assets/regions/kayah.jpg", "Kayah State"]],
      "Kayin State": [["assets/regions/kayin.jpg", "Kayin State"]],
      "Magway Region": [["assets/regions/magway.jpg", "Magway Region"]],
      "Mon State": [["assets/regions/mon.jpg", "Mon State"]],
      "Rakhine State": [["assets/regions/rakhine.jpg", "Rakhine State"]],
      "Sagaing Region": [["assets/regions/sagaing.jpg", "Sagaing Region"]],
      "Shan State": [["assets/regions/shan.jpg", "Shan State"]],
      "Shan-East State": [["assets/regions/shan-east.jpg", "Eastern Shan State"]],
      "Shan-North State": [["assets/regions/shan-north.jpg", "Northern Shan State"]],
      "Shan-South State": [["assets/regions/shan-south.jpg", "Southern Shan State"]],
      "Tanintharyi Region": [["assets/regions/tanintharyi.jpg", "Tanintharyi Region"]]
    };
function selectRegion(name) {
  const entries = regionMaps[name] || [];
  if (entries.length) {
    const briefType = name.endsWith(" State") ? "state" : "region";
    setImage(entries[0][0], name + " Map", entries[0][1], entries[0][1], true, briefType);
  }
  else showUnavailableMap(name + " Map");
  resetDropdownLabel("regionText");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
function selectTownshipImage(button) {
  const { mapSrc, mapCaption } = button.dataset;
  setImage(mapSrc, mapCaption + " Map", mapCaption, mapCaption);
  resetDropdownLabel("townshipText");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
document.querySelectorAll("#districtOptions .district-group button, #cityOptions .district-group button").forEach(button => { button.classList.add("place-option"); button.dataset.searchText = button.textContent.toLowerCase(); });
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchableMaps = [
  ...Array.from(document.querySelectorAll(".place-option"), target => {
    const group = target.closest(".district-group");
    const dropdown = target.closest(".dropdown-content");
    const categoryType = {
      regionOptions: "region",
      districtOptions: "district",
      townshipOptions: "township",
      cityOptions: "city"
    }[dropdown?.id] || "map";
    return {
      target, name: target.textContent.trim(), categoryType,
      categoryContext: group?.querySelector("h4"),
      searchText: target.dataset.searchText || target.textContent.toLowerCase()
    };
  }),
  ...Array.from(document.querySelectorAll(".popular-card"), target => ({
    target, name: target.querySelector(".popular-card-label").textContent.trim(),
    categoryType: "popular",
    searchText: target.textContent.toLowerCase()
  }))
];
function getSearchCategory(item) {
  const isMyanmar = document.documentElement.lang === "my";
  const labels = {
    region: isMyanmar ? "တိုင်းဒေသကြီး/ပြည်နယ်" : "Region/State",
    district: isMyanmar ? "ခရိုင်" : "District",
    township: isMyanmar ? "မြို့နယ်" : "Township",
    city: isMyanmar ? "မြို့" : "City",
    popular: isMyanmar ? "လူကြိုက်များသောမြေပုံ" : "Popular map",
    map: isMyanmar ? "မြေပုံ" : "Map"
  };
  const context = item.categoryContext?.textContent.trim();
  return [labels[item.categoryType], context].filter(Boolean).join(" · ");
}
function renderSearchResults() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  document.querySelectorAll(".place-option").forEach(button => { button.hidden = Boolean(query) && !button.dataset.searchText.includes(query); });
  searchResults.replaceChildren();
  if (!query) {
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    return;
  }
  const matches = searchableMaps
    .filter(item => item.searchText.toLocaleLowerCase().includes(query))
    .sort((a, b) => Number(b.name.toLocaleLowerCase().startsWith(query)) - Number(a.name.toLocaleLowerCase().startsWith(query)))
    .slice(0, 12);
  if (matches.length) {
    matches.forEach(item => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "search-result";
      option.setAttribute("role", "option");
      const name = document.createElement("span");
      name.textContent = item.name;
      const category = document.createElement("small");
      category.textContent = getSearchCategory(item);
      option.append(name, category);
      option.addEventListener("click", () => {
        item.target.click();
        searchInput.value = item.name;
        searchResults.hidden = true;
        searchInput.setAttribute("aria-expanded", "false");
      });
      searchResults.append(option);
    });
  } else {
    const empty = document.createElement("p");
    empty.className = "search-empty";
    empty.textContent = "No matching maps found.";
    searchResults.append(empty);
  }
  searchResults.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
}
searchInput.addEventListener("input", renderSearchResults);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Escape") { searchResults.hidden = true; searchInput.setAttribute("aria-expanded", "false"); }
  if (event.key === "Enter" && !searchResults.hidden) {
    const firstResult = searchResults.querySelector(".search-result");
    if (firstResult) { event.preventDefault(); firstResult.click(); }
  }
});
document.addEventListener("click", event => {
  if (!event.target.closest(".search-field")) {
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
  }
});

function clearSelection() {
  document.getElementById("searchInput").value = "";
  searchResults.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
  document.querySelectorAll(".place-option").forEach(button => { button.hidden = false; });
  currentMapLanguage = "en";
  document.getElementById("mapText").textContent = "Myanmar Map";
  document.getElementById("regionText").textContent = "Region and State";
  document.getElementById("townshipText").textContent = "Township";
  document.getElementById("districtText").textContent = "District";
  document.getElementById("cityText").textContent = "City";
  setImage("assets/maps/myanmar-english.jpg", "Myanmar Map", "Map of Myanmar", "Map of Myanmar", false);
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
  document.getElementById("downloadActions").hidden = true;
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("freeDownloadForm").reset();
  document.getElementById("requestDownloadForm").reset();
  updateRequestPrice();
  document.getElementById("downloadFormStatus").textContent = "";
  closeMapPopup();
}

function closeMapPopup() {
  const dialog = document.getElementById("mapDialog");
  if (dialog.open) dialog.close();
}

document.getElementById("mapDialog").addEventListener("close", () => {
  document.body.classList.remove("map-dialog-open");
});




function downloadCurrentMap() {
  const link = document.createElement("a");
  link.href = currentMapSource;
  link.download = (document.getElementById("imageTitle").textContent || "myanmar-map").trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") + currentMapSource.substring(currentMapSource.lastIndexOf("."));
  document.body.append(link);
  link.click();
  link.remove();
}

function showDownloadForm(kind) {
  const forms = document.getElementById("downloadForms");
  const dialog = document.getElementById("mapDialog");
  const isFree = kind === "free";
  const isPaid = kind === "paid";
  dialog.classList.add("download-flow-only");
  document.getElementById("selectedImage").hidden = true;
  document.getElementById("imageCaption").hidden = true;
  document.getElementById("downloadActions").hidden = true;
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("paidDownloadChoices").hidden = !isPaid;
  document.getElementById("freeDownloadForm").hidden = !isFree;
  document.getElementById("requestDownloadForm").hidden = true;
  document.getElementById("downloadFormStatus").textContent = "";
  forms.hidden = isPaid;
  if (isPaid) {
    document.getElementById("paidDownloadChoices").scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    forms.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function showPaidDownloadCategory(category) {
  if (category !== "soft-copy" && category !== "plotting") {
    throw new Error(`Unknown paid download category: ${category}`);
  }
  const forms = document.getElementById("downloadForms");
  const requestForm = document.getElementById("requestDownloadForm");
  document.getElementById("paidDownloadChoices").hidden = true;
  requestForm.hidden = false;
  updatePlotSizeOptions();
  document.getElementById("requestFormTitle").textContent =
    category === "soft-copy" ? "Soft copy" : "Plotting";
  requestMapProduct.querySelectorAll("optgroup").forEach(group => {
    group.hidden = group.dataset.category !== category;
  });
  requestMapProduct.value = "";
  requestMapSize.value = "";
  customWidth.value = "";
  customHeight.value = "";
  updateRequestPrice();
  forms.hidden = false;
}

const requestMapProduct = document.getElementById("requestMapProduct");
const requestMapSize = document.getElementById("requestMapSize");
const requestMapSizeField = document.getElementById("requestMapSizeField");
const customDimensions = document.getElementById("customDimensions");
const customWidth = document.getElementById("customWidth");
const customHeight = document.getElementById("customHeight");
const requestPrice = document.getElementById("requestPrice");
const money = amount => `${Number(amount).toLocaleString("en-US")} MMK`;
const mapPlotSizes = {
  "yangon region map": ["2x3", "3x4", "4x6"],
  "yangon city map": ["3x4", "4x6", "4x8"],
  "myanmar map": ["2x4", "2.5x5", "3x6"],
  "english — myanmar map": ["2x4", "2.5x5", "3x6"],
  "mandalay map": ["2x3", "3x4", "4x6"],
  "mandalay region map": ["2x3", "3x4", "4x6"],
  "naypyidaw map": ["4x6", "4x8"],
  "naypyidaw city map": ["4x6", "4x8"],
  "naypyitaw city map": ["4x6", "4x8"],
  "pyin oo lwin map": ["3x4", "4x6"],
  "bago region map": ["2x3", "3x4", "4x6"],
  "mon state map": ["2x3", "3x4", "4x6"]
};
const defaultPlotSizes = Array.from(requestMapSize.options).slice(1).map(option => ({
  value: option.value,
  label: option.textContent
}));

function updatePlotSizeOptions() {
  const mapTitle = document.getElementById("imageTitle").textContent.trim().toLowerCase();
  const sizes = mapPlotSizes[mapTitle]?.map(value => {
    const [width, height] = value.split("x");
    return { value, label: `${width} × ${height} ft` };
  }) || defaultPlotSizes;
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = "Select a map size";
  requestMapSize.replaceChildren(placeholder);
  sizes.forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    requestMapSize.append(option);
  });
}

function updateRequestPrice() {
  const product = requestMapProduct.options[requestMapProduct.selectedIndex];
  const rate = Number(product?.dataset.rate || 0);
  const fixedPrice = Number(product?.dataset.price || 0);
  const isAreaPrice = rate > 0;
  requestMapSizeField.hidden = !isAreaPrice;
  requestMapSize.disabled = !isAreaPrice;
  requestMapSize.required = isAreaPrice;
  if (!isAreaPrice) requestMapSize.value = "";
  const isCustom = isAreaPrice && requestMapSize.value === "custom";
  customDimensions.hidden = !isCustom;
  customWidth.required = isCustom;
  customHeight.required = isCustom;

  if (!product || !product.value) {
    requestPrice.textContent = "Select a product and size to calculate the price.";
    return;
  }
  if (fixedPrice) {
    const format = product.value.endsWith("a3") ? "Fixed A3 size" : "Digital copy";
    requestPrice.textContent = `Total price: ${money(fixedPrice)} (${format})`;
    return;
  }
  if (!requestMapSize.value) {
    requestPrice.textContent = `Rate: ${money(rate)} per sq ft. Select a map size to calculate the total.`;
    return;
  }
  let area;
  let sizeLabel;
  if (isCustom) {
    const width = Number(customWidth.value);
    const height = Number(customHeight.value);
    if (!(width > 0 && height > 0)) {
      requestPrice.textContent = `Rate: ${money(rate)} per sq ft. Enter width and height to calculate the total.`;
      return;
    }
    area = width * height;
    sizeLabel = `${width} × ${height} ft`;
  } else {
    const [width, height] = requestMapSize.value.split("x").map(Number);
    area = width * height;
    sizeLabel = requestMapSize.options[requestMapSize.selectedIndex].text;
  }
  const total = area * rate;
  requestPrice.textContent = `Total price: ${money(total)} (${sizeLabel}, ${area.toLocaleString("en-US")} sq ft × ${money(rate)}/sq ft)`;
}

requestMapProduct.addEventListener("change", updateRequestPrice);
requestMapSize.addEventListener("change", updateRequestPrice);
customWidth.addEventListener("input", updateRequestPrice);
customHeight.addEventListener("input", updateRequestPrice);
updateRequestPrice();

document.getElementById("freeDownloadForm").addEventListener("submit", event => {
  event.preventDefault();
  downloadCurrentMap();
  document.getElementById("downloadFormStatus").textContent = "Your map download has started.";
});




document.getElementById("requestDownloadForm").addEventListener("submit", event => {
  event.preventDefault();
  const productLabel = requestMapProduct.options[requestMapProduct.selectedIndex].text.split(" — ")[0];
  let sizeLabel = "";
  let total = Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.price || 0);
  if (requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate) {
    if (requestMapSize.value === "custom") {
      const width = Number(customWidth.value);
      const height = Number(customHeight.value);
      sizeLabel = `${width} × ${height} ft`;
      total = width * height * Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate);
    } else {
      sizeLabel = requestMapSize.options[requestMapSize.selectedIndex].text;
      const [width, height] = requestMapSize.value.split("x").map(Number);
      total = width * height * Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate);
    }
  } else {
    sizeLabel = requestMapProduct.value.endsWith("a3") ? "A3" : "Digital copy";
  }
  document.getElementById("kpayOrderSummary").textContent = `${productLabel} · ${sizeLabel} · Total: ${money(total)}`;
  document.getElementById("downloadFormStatus").textContent = "";
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("kpayPanel").hidden = false;
  document.getElementById("kpayPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function hideKpayPanel() {
  document.getElementById("kpayPanel").hidden = true;
  const title = document.getElementById("imageTitle").textContent;
  const caption = document.getElementById("imageCaption").textContent;
  setImage(currentMapSource, title, caption, title);
}
