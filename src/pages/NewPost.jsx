// import { useState } from "react";
import { useForm } from "react-hook-form";
import useStore from "../stores/store";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function NewPost() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [createNewPost, loading] = useStore((state) => [
    state.createNewPost,
    state.loading,
  ]);
  const [location, country] = watch(["location", "country"]);
  const [tempImgUrl, setTempImgUrl] = useState();

  function onSubmit(data) {
    createNewPost(data);
  }

  function handleReset() {
    setTempImgUrl(null);
    reset();
  }

  useEffect(() => {
    if (location && country) {
      getCoordinates(location, country);
    }
  }, [location, country]);

  async function getCoordinates(location, country) {
    setValue("latitude", null);
    setValue("longitude", null);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${location}&country=${country}&format=json`
    );
    const result = await response.json();
    if (result[0]) {
      setValue("latitude", Number(result[0].lat));
      setValue("longitude", Number(result[0].lon));
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center w-full mb-8">
          <h1 className="m-4 font-bold font-title text-4xl text-center">
            Write a New Blog Post
          </h1>

          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full max-w-lg p-4"
          >
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                {...register("title", { required: true, minLength: 10 })}
                placeholder="Make it short and catchy ;-)"
                className="form-input"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                {...register("location", { required: true, minLength: 3 })}
                placeholder="like 'Hamburg'"
                className="form-input"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                {...register("country", { required: true, minLength: 5 })}
                placeholder="like 'Germany'"
                className="form-input"
              />
            </div>
            <div className="flex flex-row items-center gap-4 justify-between w-full max-w-lg">
              <div className="flex flex-col gap-1 text-sm w-5/12 sm:w-1/2">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="text"
                  name="latitude"
                  readOnly={true}
                  {...register("latitude", { required: true })}
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-1 text-sm w-5/12 sm:w-1/2">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="text"
                  name="longitude"
                  readOnly={true}
                  {...register("longitude", { required: true })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="flex flex-row items-center gap-4 justify-between w-full max-w-lg">
              <div className="flex flex-col gap-1 text-sm w-5/12 sm:w-1/2">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  {...register("startDate", { required: true, minLength: 10 })}
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-1 text-sm w-5/12 sm:w-1/2">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  {...register("endDate", { required: true })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="text">Text</label>
              <textarea
                name="text"
                rows={20}
                {...register("text", { required: true })}
                placeholder="Tell our readers more about your trip"
                className="w-full form-input"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <div className="form-input w-full h-64 flex flex-col items-center justify-center">
                <img
                  src={tempImgUrl}
                  alt="Choose an image that resembles your experience"
                  className="w-full object-cover overflow-hidden rounded-md text-center text-gray-500"
                />
              </div>
              <label
                htmlFor="image"
                className="btn-secondary mt-1 p-1 text-center"
              >
                Select an image
              </label>
              <input
                id="image"
                type="file"
                accept="image/jpg, image/jpeg"
                onInput={(e) =>
                  setTempImgUrl(URL.createObjectURL(e.target.files[0]))
                }
                name="image"
                {...register("image", { required: true })}
                className="opacity-0 h-0"
              />
            </div>

            <div className="flex flex-row gap-4 w-full mt-4">
              <button
                onClick={handleReset}
                className="btn-secondary px-2 py-1 w-1/2"
              >
                Cancel
              </button>
              <button type="sumbit" className="btn-primary px-2 py-1 w-1/2">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default NewPost;
