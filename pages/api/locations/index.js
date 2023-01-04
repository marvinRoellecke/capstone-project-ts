import dbConnect from "../../../db/dbConnect";
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const locations = await Location.find();

    const locationsArray = locations.map((location) => {
      return {
        id: location._id,
        title: location.title,
        info: location.info,
        address: location.address,
        latitude: location.latitude,
        longitude: location.longitude,
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
