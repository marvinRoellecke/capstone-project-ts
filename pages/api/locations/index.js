import dbConnect from "../../../db/dbConnect";
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const filter = {};

    if (request.query.sport) {
      filter["info.sport"] = request.query.sport;
    }
    if (request.query.rating) {
      const limit = Number(request.query.rating) + 1;
      filter.rating = {
        $gte: request.query.rating,
        $lt: limit,
      };
    }
    if (request.query.city) {
      filter["address.city"] = request.query.city;
    }

    if (request.query.outdoor) {
      filter.outdoor = request.query.outdoor;
    }

    if (request.query.public) {
      filter.public = request.query.public;
    }

    if (request.query.lighting) {
      filter["infrastructure.lighting"] = request.query.lighting;
    }

    if (request.query.wheelchair) {
      filter["infrastructure.wheelchair"] = request.query.wheelchair;
    }

    const sort = {};

    if (request.query.sort === "sortTitle1") {
      sort.title = 1;
    }

    if (request.query.sort === "sortTitle-1") {
      sort.title = -1;
    }

    if (request.query.sort === "sortRating1") {
      sort.rating = 1;
    }

    if (request.query.sort === "sortRating-1") {
      sort.rating = -1;
    }

    const locations = await Location.find(filter).sort(sort);

    const locationsArray = locations.map((location) => {
      return {
        id: location._id,
        title: location.title,
        info: location.info,
        address: location.address,
        coordinates: location.coordinates,
        image: location.image,
        infrastructure: location.infrastructure,
        outdoor: location.outdoor,
        public: location.public,
        rating: location.rating,
      };
    });
    response.status(200).json(locationsArray);
  }

  if (request.method === "POST") {
    const data = request.body;
    try {
      const newLocation = await Location.create(data);
      response.status(201).json(newLocation);
    } catch (error) {
      response.status(400).json("Data could not be processed", { error });
    }
  }
}
