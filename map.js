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
  "Myitkyina":"မြစ်ကြီးနားခရိုင်.jpg", "Tiddim":"တီးတန်.jpg", "Minbu":"Minn Buu District.jpg"
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
  "Seikpyu": cityFolder + "မကွေးတိုင်း/ဆိပ်ဖြုမြို့.jpg",
  "Magway": cityFolder + "မကွေးတိုင်း/မကွေးမြို့.jpg",
  "Bago": cityFolder + "ပဲခူးတိုင်း/Bago.jpg",
  "Painzalok": cityFolder + "ပဲခူးတိုင်း/ပိန်းဇလုပ်မြို့.jpg",
  "Minhla": cityFolder + "ပဲခူးတိုင်း/မင်းလှမြို့.jpg",
  "Pyay": cityFolder + "ပဲခူးတိုင်း/ပြည်မြို့.jpg",
  "Taungoo": cityFolder + "ပဲခူးတိုင်း/တောင်ငူမြို့.jpg",
  "Naypyidaw": cityFolder + "နေပြည်တော်/Naypyitaw.png",
  "Sagaing": cityFolder + "စစ်ကိုင်းတိုင်း/saging.jpg",
  "Banmauk": cityFolder + "စစ်ကိုင်းတိုင်း/ဗန်မောက်မြို့.jpg",
  "Shwebo": cityFolder + "စစ်ကိုင်းတိုင်း/ရွှေဘိုမြို့.jpg",
  "Myitkyina": cityFolder + "ကချင်ပြည်နယ်/မြစ်ကြီးနားမြို့.png",
  "Mawlamyine": cityFolder + "မွန်ပြည်နယ်/မော်လမြိုင်မြို့.jpg",
  "Sittwe": cityFolder + "ရခိုင်ပြည်နယ်/စစ်တွေမြို့.jpg",
  "Taunggyi": cityFolder + "ရှမ်းပြည်နယ်/တောင်ကြီး.jpg",
  "Hopong": cityFolder + "ရှမ်းပြည်နယ်/ဟိုပုံးမြို့.jpg",
  "Kalaw": cityFolder + "ရှမ်းပြည်နယ်/ကလော.jpg",
  "Kengtung": cityFolder + "ရှမ်းပြည်နယ်/ကျိုင်းတုံမြို့.jpg",
  "Tachileik": cityFolder + "ရှမ်းပြည်နယ်/တာချီလိတ်.jpg",
  "Lashio": cityFolder + "ရှမ်းပြည်နယ်/လားရှိုး.jpg"
};
const cityMapTitles = {
  "Kokang Self-Administered Zone": "Kokang Self-Administered Zone"
};
let currentMapLanguage = "en";
let currentMapSource = "assets/maps/myanmar-english.jpg";
let currentMapTitle = "Myanmar Map";
let currentMapCaption = "Map of Myanmar";
let currentMapBriefType = "";
let activeMapDropdown = "mapOptions";
function showUnavailableMap(title, showPopup = true) {
  const image = document.getElementById("selectedImage");
  image.onerror = null;
  image.hidden = true;
  currentMapSource = "";
  currentMapTitle = title;
  currentMapCaption = "No map image is available for this selection.";
  currentMapBriefType = "";
  document.getElementById("mapDialog").classList.remove("download-flow-only", "has-map-brief");
  document.getElementById("regionBrief").hidden = true;
  document.getElementById("cityBrief").hidden = true;
  document.getElementById("featureBrief").hidden = true;
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
function setImage(src, title, caption, alt, showPopup = true, briefType = "") {
  const dialog = document.getElementById("mapDialog");
  const isRegionBrief = briefType === "region" || briefType === "state" || briefType === "overview";
  const showMapBrief = isRegionBrief || briefType === "city" || briefType === "feature";
  currentMapBriefType = briefType;
  dialog.classList.remove("download-flow-only");
  dialog.classList.toggle("has-map-brief", showMapBrief);
  document.getElementById("regionBrief").hidden = !isRegionBrief;
  document.getElementById("cityBrief").hidden = briefType !== "city";
  document.getElementById("featureBrief").hidden = briefType !== "feature";
  if (isRegionBrief) {
    const capitalLabel = document.querySelector("#regionBrief li");
    const isState = briefType === "state";
    const isOverview = briefType === "overview";
    capitalLabel.dataset.en = isOverview ? "Regional and state capitals" : isState ? "State capital" : "Regional capital";
    capitalLabel.dataset.my = isOverview ? "တိုင်းဒေသကြီးနှင့် ပြည်နယ်မြို့တော်များ" : isState ? "ပြည်နယ်မြို့တော်" : "တိုင်းဒေသကြီးမြို့တော်";
    capitalLabel.textContent = capitalLabel.dataset[document.documentElement.lang === "my" ? "my" : "en"];
  }
  const image = document.getElementById("selectedImage");
  image.hidden = false;
  document.getElementById("imageCaption").hidden = false;
  image.onerror = () => {
    if (currentMapSource === src) showUnavailableMap(title, false);
  };
  currentMapSource = src;
  currentMapTitle = title;
  currentMapCaption = caption;
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
  activeMapDropdown = "mapOptions";
  currentMapLanguage = language;
  const label = language === "my" ? "Myanmar" : "English";
  resetDropdownLabel("mapText");
  const caption = language === "my" ? "မြန်မာနိုင်ငံမြေပုံ" : "Map of Myanmar";
  setImage(`assets/maps/myanmar-${language === "my" ? "burmese" : "english"}.jpg`, label + " — Myanmar Map", caption, caption, true, "overview");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
function openPopularMap(name, imagePath) {
  const isRegionMap = imagePath.startsWith("assets/regions/");
  const isCityMap = imagePath.startsWith("assets/cities/");
  const isOverviewMap = imagePath.startsWith("assets/maps/myanmar-");
  const briefType = isRegionMap
    ? (name.endsWith(" State") ? "state" : "region")
    : isCityMap ? "city" : isOverviewMap ? "overview" : "feature";
  activeMapDropdown = isRegionMap ? "regionOptions" : isCityMap ? "cityOptions" : "mapOptions";
  setImage(imagePath, name + " Map", "Popular map for " + name, name + " map", true, briefType);
}
function showPlace(name, type) {
  activeMapDropdown = type + "Options";
  const folder = type === "district" ? "districts/Districts/" : "cities/";
  const file = type === "district" ? districtImages[name] : cityImages[name];
  const title = type === "district" ? name + " District" : cityMapTitles[name] || name + " City";
  if (file) setImage("assets/" + folder + encodeURI(file), title, "Map for " + name, title, true, type === "city" ? "city" : "feature");
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
  activeMapDropdown = "regionOptions";
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
  activeMapDropdown = "townshipOptions";
  const { mapSrc, mapCaption } = button.dataset;
  setImage(mapSrc, mapCaption + " Map", mapCaption, mapCaption, true, "feature");
  resetDropdownLabel("townshipText");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
document.querySelectorAll("#districtOptions .district-group button, #cityOptions .district-group button").forEach(button => { button.classList.add("place-option"); button.dataset.searchText = button.textContent.toLowerCase(); });
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const clearSearchButton = document.getElementById("clearSearch");
function focusMapSearch() {
  searchInput.focus();
}
function clearMapSearch() {
  searchInput.value = "";
  renderSearchResults();
  searchInput.focus();
}
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
    const actionName = target.getAttribute("onclick")?.match(/select(?:District|City)\('([^']+)'\)/)?.[1];
    const mapImage = categoryType === "district"
      ? districtImages[actionName]
      : categoryType === "city" ? cityImages[actionName] : "";
    if (mapImage) target.dataset.translationSource = mapImage;
    return {
      target, name: target.textContent.trim(), categoryType,
      categoryContext: group?.querySelector("h4"),
      mapFileName: mapImage?.split("/").pop().replace(/\.[^.]+$/, ""),
      searchText: target.dataset.searchText || target.textContent.toLowerCase()
    };
  }),
  ...Array.from(document.querySelectorAll(".popular-card"), target => ({
    target, name: target.querySelector(".popular-card-label").textContent.trim(),
    categoryType: "popular",
    categoryContext: null,
    searchText: target.textContent.toLowerCase()
  }))
];
function normalizeMapSearchText(value) {
  return String(value || "")
    .normalize("NFC")
    .replace(/\u1025(?:\u103a)?\u102e/g, "\u1026\u1038")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase();
}
function getMapSearchTerms(item) {
  const translations = window.dpsMapTranslations || {};
  const translatedName = translations[item.name];
  const translatedAliases = Array.from(item.target.querySelectorAll("[data-my]"), element => element.dataset.my);
  return [
    item.name,
    item.searchText,
    item.categoryContext?.textContent,
    item.mapFileName,
    item.target.dataset.mapCaption,
    item.target.dataset.mapSrc,
    translatedName,
    ...translatedAliases
  ].filter(Boolean).map(normalizeMapSearchText);
}
const searchableMapByTarget = new Map(
  searchableMaps.filter(item => item.target.classList.contains("place-option")).map(item => [item.target, item])
);
function renderSearchResults() {
  const query = normalizeMapSearchText(searchInput.value);
  clearSearchButton.hidden = !query;
  document.querySelectorAll(".place-option").forEach(button => {
    const item = searchableMapByTarget.get(button);
    const terms = item ? getMapSearchTerms(item) : [normalizeMapSearchText(button.dataset.searchText)];
    button.hidden = Boolean(query) && !terms.some(term => term.includes(query));
  });
  searchResults.replaceChildren();
  if (!query) {
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    return;
  }
  const matches = searchableMaps
    .map(item => ({ item, terms: getMapSearchTerms(item) }))
    .filter(({ terms }) => terms.some(term => term.includes(query)))
    .sort((a, b) =>
      Number(b.terms.some(term => term === query)) - Number(a.terms.some(term => term === query)) ||
      Number(b.terms.some(term => term.startsWith(query))) - Number(a.terms.some(term => term.startsWith(query)))
    )
    .slice(0, 12)
    .map(({ item }) => item);
  if (matches.length) {
    matches.forEach(item => {
      const option = document.createElement("article");
      option.className = "search-result";
      option.setAttribute("role", "listitem");
      const details = document.createElement("div");
      details.className = "search-result-details";
      const name = document.createElement("span");
      name.className = "search-result-name";
      name.textContent = item.name;
      const location = document.createElement("small");
      location.className = "search-result-location";
      const mapIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      mapIcon.classList.add("search-result-map-icon");
      mapIcon.setAttribute("viewBox", "0 0 24 24");
      mapIcon.setAttribute("aria-hidden", "true");
      mapIcon.setAttribute("focusable", "false");
      const mapIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      mapIconPath.setAttribute("d", "M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Zm0 0V3m6 18V6");
      mapIcon.append(mapIconPath);
      location.append(mapIcon, document.createTextNode(item.categoryContext?.textContent.trim() || "Myanmar"));
      details.append(name, location);
      const more = document.createElement("button");
      more.type = "button";
      more.className = "search-result-more";
      more.textContent = "See More";
      more.setAttribute("aria-label", `See more about ${item.name}`);
      more.addEventListener("click", () => {
        item.target.click();
        searchInput.value = item.name;
        renderSearchResults();
        searchResults.hidden = true;
        searchInput.setAttribute("aria-expanded", "false");
      });
      option.append(details, more);
      searchResults.append(option);
    });
  } else {
    const empty = document.createElement("p");
    empty.className = "search-empty";
    empty.setAttribute("role", "listitem");
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
    const firstResult = searchResults.querySelector(".search-result-more");
    if (firstResult) { event.preventDefault(); firstResult.click(); }
  }
});
document.addEventListener("click", event => {
  if (!event.target.closest(".search-field")) {
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".place-option").forEach(button => { button.hidden = false; });
  }
});

function clearSelection() {
  document.getElementById("searchInput").value = "";
  searchResults.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
  document.querySelectorAll(".place-option").forEach(button => { button.hidden = false; });
  currentMapLanguage = "en";
  activeMapDropdown = "mapOptions";
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
  closeMapPopup(false);
}

function closeMapPopup(openSelection = true) {
  const dialog = document.getElementById("mapDialog");
  if (!dialog.open) return;
  dialog.close();
  if (openSelection) {
    setTimeout(() => {
      document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
      document.getElementById(activeMapDropdown)?.classList.add("show");
    }, 0);
  }
}

function backToMap() {
  const dialog = document.getElementById("mapDialog");
  dialog.classList.remove("download-flow-only");
  document.getElementById("selectedImage").hidden = false;
  document.getElementById("imageCaption").hidden = false;
  document.getElementById("downloadActions").hidden = false;
  document.getElementById("paidDownloadChoices").hidden = true;
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("freeDownloadForm").hidden = true;
  document.getElementById("requestDownloadForm").hidden = true;
  document.getElementById("requestBackButton").hidden = true;
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("downloadFormStatus").textContent = "";
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

function updatePaidFlowBackLabel(label) {
  const button = document.querySelector(".paid-flow-back");
  button.setAttribute("aria-label", label);
  button.title = label;
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
    updatePaidFlowBackLabel("Back to map");
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
  currentPaidCategory = category;
  updatePlotSizeOptions();
  document.getElementById("requestFormTitle").textContent =
    category === "soft-copy" ? "Soft copy" : "Plotting";
  const isSoftCopy = category === "soft-copy";
  const isPlotting = category === "plotting";
  updatePaidFlowBackLabel("Back to paid download types");
  document.getElementById("softCopyFormats").hidden = !isSoftCopy;
  document.querySelectorAll('input[name="softCopyFormat"]').forEach(input => {
    input.disabled = !isSoftCopy;
    input.required = false;
  });
  plottingProductChoices.hidden = !isPlotting;
  plottingProductChoices.querySelectorAll(".plotting-product-choice").forEach(button => {
    button.setAttribute("aria-pressed", "false");
    button.disabled = !isPlotting;
  });
  document.getElementById("requestMapProductField").hidden = true;
  requestMapProduct.disabled = isSoftCopy;
  requestMapProduct.required = false;
  requestMapProduct.querySelectorAll("optgroup").forEach(group => {
    group.hidden = group.dataset.category !== category;
    group.disabled = false;
  });
  requestMapProduct.value = "";
  requestMapSize.value = "";
  customWidth.value = "";
  customHeight.value = "";
  updateRequestPrice();
  forms.hidden = false;
}

function handlePaidFlowBack() {
  const paidDownloadChoices = document.getElementById("paidDownloadChoices");
  if (paidDownloadChoices.hidden) {
    showDownloadForm("paid");
    return;
  }

  const dialog = document.getElementById("mapDialog");
  dialog.classList.remove("download-flow-only");
  document.getElementById("selectedImage").hidden = false;
  document.getElementById("imageCaption").hidden = false;
  document.getElementById("downloadActions").hidden = false;
  paidDownloadChoices.hidden = true;
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("freeDownloadForm").hidden = true;
  document.getElementById("requestDownloadForm").hidden = true;
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("downloadFormStatus").textContent = "";
  document.getElementById("downloadActions").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

const requestMapProduct = document.getElementById("requestMapProduct");
const softCopyFormats = document.getElementById("softCopyFormats");
const plottingProductChoices = document.getElementById("plottingProductChoices");
const requestMapSize = document.getElementById("requestMapSize");
const requestMapSizeField = document.getElementById("requestMapSizeField");
const customDimensions = document.getElementById("customDimensions");
const customWidth = document.getElementById("customWidth");
const customHeight = document.getElementById("customHeight");
const requestPrice = document.getElementById("requestPrice");
const money = amount => `${Number(amount).toLocaleString("en-US")} MMK`;
const standardPlotSizes = ["2x3", "3x4", "4x6"];
const myanmarPlotSizes = ["2x4", "3x6", "4x8"];
const mapPlotSizes = {
  "myanmar map": myanmarPlotSizes,
  "english — myanmar map": myanmarPlotSizes,
  "myanmar — myanmar map": myanmarPlotSizes,
  "taikkyi city map": standardPlotSizes,
  "taikkyi township map": [],
  "yangon city map": ["3x4", "4x6"],
  "hmawbi city map": standardPlotSizes,
  "hmawbi township map": standardPlotSizes,
  "kungyangon city map": standardPlotSizes,
  "kungyangon township map": standardPlotSizes,
  "kawhmu city map": standardPlotSizes,
  "kawhmu township map": standardPlotSizes,
  "hlegu city map": standardPlotSizes,
  "hlegu township map": [],
  "kyauktan city map": standardPlotSizes,
  "kyauktan township map": standardPlotSizes,
  "mandalay city map": ["3x4", "4x6"],
  "pyin oo lwin city map": ["3x4"],
  "pyin oo lwin map": ["3x4"],
  "naypyidaw city map": ["4x6"],
  "naypyitaw city map": ["4x6"],
  "taunggyi city map": ["3x4"],
  "minhla township map": [],
  "minbu township map": [],
  "ngape township map": [],
  "minhla, minbu and ngape townships map": []
};
let currentMapPlotSizes = [];
let currentPaidCategory = "";
let selectedSoftCopyFormat = null;

function updatePlotSizeOptions() {
  const mapTitle = currentMapTitle.trim().toLowerCase();
  const mapSource = currentMapSource.toLowerCase();
  let sizes = mapPlotSizes[mapTitle] || mapPlotSizes[`${mapTitle} map`];
  if (!sizes && mapSource.startsWith("assets/regions/")) {
    sizes = standardPlotSizes;
  } else if (!sizes && mapSource.startsWith("assets/townships/")) {
    if (mapSource.includes("/ရန်ကုန်တိုင်း/")) {
      sizes = standardPlotSizes;
    } else if (mapTitle === "patheingyi township map") {
      sizes = ["3x3"];
    } else {
      sizes = ["3x4"];
    }
  }
  currentMapPlotSizes = sizes || [];
  const options = currentMapPlotSizes.map(value => {
    const [width, height] = value.split("x");
    return { value, label: `${width} × ${height} ft` };
  });
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = options.length ? "Select a map size" : "No sizes listed for this map";
  requestMapSize.replaceChildren(placeholder);
  options.forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    requestMapSize.append(option);
  });
  return currentMapPlotSizes;
}

function updateRequestPrice() {
  const isSoftCopy = currentPaidCategory === "soft-copy";
  const product = requestMapProduct.options[requestMapProduct.selectedIndex];
  const rate = Number(product?.dataset.rate || 0);
  const fixedPrice = Number(product?.dataset.price || 0);
  const isAreaPrice = rate > 0;
  if (isSoftCopy) {
    requestPrice.hidden = true;
    requestMapSizeField.hidden = true;
    requestMapSize.disabled = true;
    requestMapSize.required = false;
    customDimensions.hidden = true;
    customWidth.required = false;
    customHeight.required = false;
    return;
  }
  requestPrice.hidden = false;
  const hasPlotSizes = currentPaidCategory !== "plotting" || currentMapPlotSizes.length > 0;
  requestMapSizeField.hidden = !isAreaPrice || !hasPlotSizes;
  requestMapSize.disabled = !isAreaPrice || !hasPlotSizes;
  requestMapSize.required = isAreaPrice && hasPlotSizes;
  if (!isAreaPrice || !hasPlotSizes) requestMapSize.value = "";
  const isCustom = isAreaPrice && hasPlotSizes && requestMapSize.value === "custom";
  customDimensions.hidden = !isCustom;
  customWidth.required = isCustom;
  customHeight.required = isCustom;

  if (!product || !product.value) {
    requestPrice.textContent = currentPaidCategory === "plotting" && !currentMapPlotSizes.length
      ? "No plotting sizes are listed for this map."
      : "Select a product and size to calculate the price.";
    return;
  }
  if (fixedPrice) {
    const format = product.value.endsWith("a3") ? "Fixed A3 size" : "Digital copy";
    requestPrice.textContent = `Total price: ${money(fixedPrice)} (${format})`;
    return;
  }
  if (!currentMapPlotSizes.length) {
    requestPrice.textContent = "No plotting sizes are listed for this map.";
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
    sizeLabel = `${width} × ${height} ft`;
  }
  const total = area * rate;
  requestPrice.textContent = `Total price: ${money(total)} (${sizeLabel}, ${area.toLocaleString("en-US")} sq ft × ${money(rate)}/sq ft)`;
}

requestMapProduct.addEventListener("change", updateRequestPrice);
requestMapSize.addEventListener("change", updateRequestPrice);
customWidth.addEventListener("input", updateRequestPrice);
customHeight.addEventListener("input", updateRequestPrice);
softCopyFormats.addEventListener("change", event => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || input.name !== "softCopyFormat") return;
  selectedSoftCopyFormat = input.checked ? input : null;
  document.getElementById("downloadFormStatus").textContent = "";
});
softCopyFormats.addEventListener("click", event => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || input.name !== "softCopyFormat" || input.disabled) return;
  if (input !== selectedSoftCopyFormat) return;
  event.preventDefault();
  requestAnimationFrame(() => {
    input.checked = false;
    selectedSoftCopyFormat = null;
    document.getElementById("downloadFormStatus").textContent = "";
  });
});
plottingProductChoices.addEventListener("click", event => {
  const button = event.target.closest(".plotting-product-choice");
  if (!button || button.disabled) return;
  const isSelected = button.getAttribute("aria-pressed") === "true";
  requestMapProduct.value = isSelected ? "" : button.dataset.productValue;
  plottingProductChoices.querySelectorAll(".plotting-product-choice").forEach(option => {
    option.setAttribute("aria-pressed", String(!isSelected && option === button));
  });
  document.getElementById("downloadFormStatus").textContent = "";
  updateRequestPrice();
});
updateRequestPrice();

document.getElementById("freeDownloadForm").addEventListener("submit", event => {
  event.preventDefault();
  downloadCurrentMap();
  document.getElementById("downloadFormStatus").textContent = "Your map download has started.";
});




document.getElementById("requestDownloadForm").addEventListener("submit", event => {
  event.preventDefault();
  if (currentPaidCategory === "plotting" && !requestMapProduct.value) {
    document.getElementById("downloadFormStatus").textContent = currentMapPlotSizes.length
      ? "Select Vinyl, Photopaper, or Sticker to continue."
      : "No plotting sizes are listed for this map.";
    return;
  }
  if (currentPaidCategory === "plotting" && !currentMapPlotSizes.length) {
    document.getElementById("downloadFormStatus").textContent =
      "No plotting sizes are listed for this map.";
    return;
  }
  let productLabel;
  let sizeLabel = "";
  let total;
  if (currentPaidCategory === "soft-copy") {
    const selectedFormat = document.querySelector('input[name="softCopyFormat"]:checked');
    if (!selectedFormat) {
      document.getElementById("downloadFormStatus").textContent =
        "Select a Soft copy format before submitting.";
      return;
    }
    const productOption = Array.from(requestMapProduct.options).find(option =>
      option.value === selectedFormat.value.toLowerCase()
    );
    if (!productOption) throw new Error(`Unknown Soft copy format: ${selectedFormat.value}`);
    productLabel = selectedFormat.value;
    sizeLabel = "Digital copy";
    total = Number(productOption.dataset.price);
    if (!(total > 0)) throw new Error(`Missing price for Soft copy format: ${selectedFormat.value}`);
  } else {
    const productLabels = { pdf: "PDF", jpg: "JPG", vinyl: "Vinyl", photopaper: "Photopaper", sticker: "Sticker" };
    productLabel = productLabels[requestMapProduct.value];
    if (!productLabel) throw new Error(`Unknown paid download product: ${requestMapProduct.value}`);
    total = Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.price || 0);
    if (requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate) {
      if (requestMapSize.value === "custom") {
        const width = Number(customWidth.value);
        const height = Number(customHeight.value);
        sizeLabel = `${width} × ${height} ft`;
        total = width * height * Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate);
      } else {
        const [width, height] = requestMapSize.value.split("x").map(Number);
        sizeLabel = `${width} × ${height} ft`;
        total = width * height * Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate);
      }
    } else {
      sizeLabel = requestMapProduct.value.endsWith("a3") ? "A3" : "Digital copy";
    }
  }
  document.getElementById("kpayOrderSummary").textContent = `${productLabel} · ${sizeLabel} · Total: ${money(total)}`;
  document.getElementById("downloadFormStatus").textContent = "";
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("kpayPanel").hidden = false;
  document.getElementById("kpayPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function hideKpayPanel() {
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("downloadForms").hidden = false;
  showPaidDownloadCategory(currentPaidCategory);
}
