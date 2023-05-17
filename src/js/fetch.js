const list = document.querySelector(".products-list");

const fetchProducts = async () => {
  const response = await fetch(
    "https://voodoo-sandbox.myshopify.com/products.json?limit=12"
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
};

const getReply = () => {
  fetchProducts()
    .then((data) => renderProductList(data.products))
    .catch((error) => console.log(error));
};

getReply();

const renderProductList = (products) => {
  const markup = products
    .map((product) => {
      return `<li class="h-full relative flex flex-col">
      <img
        src="${product.images[0].src}"
        alt="${product.title}"
        class="border-solid border border-black rounded"
      />
      <div class="flex justify-between my-3 flex-1 xl:mb-0">
        <div class="font-bold">
          <p>${product.title}</p>
          <p>${product.variants[0].price} KR.</p>
        </div>
        <div class="text-right">
          <p class="font-bold">Condition</p>
          <p>Slightly used</p>
        </div>
      </div>
      <button
        class="py-3 w-full text-center bg-button text-secondaryText rounded font-bold hover:text-hoverColor hover:bg-main hover:outline transition-all duration-300 xl:hidden"
        type="button"
      >
        PICK-UP IN
        <span class="underline">2200</span>
      </button>
      <div
        class="p-2 absolute top-3 left-3 text-xs bg-button text-secondaryText rounded"
      >
        USED
      </div>
    </li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
};
