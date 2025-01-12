function Card({ location = "Earth", tag = ["photography", "earth", "travel"] }) {
  return (
    <>
      <div class="p-10">
        <div class="max-w-sm rounded-md overflow-hidden shadow-lg bg-blue-500">
          <img class="w-full" src="/mountain.jpg" alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{location}</div>
            <p class="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag[0]}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag[1]}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag[2]}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
