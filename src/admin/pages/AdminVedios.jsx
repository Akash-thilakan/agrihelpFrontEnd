import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../common/Components/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import {
  addVediosAPI,
  deleteVedioAPI,
  getAllVediosAPI,
} from "../../services/allAPI";

function AdminVedios() {
  const [vedios, setVedios] = useState([]);
  const [vedioData, setVedioData] = useState({
    title: "",
    vedioUrl: "",
    description: "",
  });
  const token = sessionStorage.getItem("token");
  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };
  const handleAddVedio = async () => {
    console.log(vedioData);
    try {
      const result = await addVediosAPI(vedioData, reqHeader);
      console.log(result);
      if (result.status === 200) {
        toast.success("Vedio added successfully ");
        setVedioData({
          title: "",
          vedioUrl: "",
          description: "",
        });
        getVedios()
      } else if (result.status == 401) {
        toast.warning(result.response.data);
      } else {
        toast.error("error in adding Vedio");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const getVedios = async () => {
    const result = await getAllVediosAPI();
    setVedios(result.data);
  };

  const handleDeleteVedio = async (id) => {
    const result =await deleteVedioAPI(id, reqHeader);
    if (result.status === 200) {
      toast.success("Vedio Deleted");
      getVedios();
    } else {
      toast.error("Deletion Failed");
    }
  };

  useEffect(() => {
    getVedios();
  }, []);
  return (
    <>
      <AdminHeader />
      <div className="w-full min-h-screen bg-gray-50">
        <div className="w-full h-64 bg-gradient-to-r from-green-600 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
          <h1 className="text-4xl font-bold animation-float">
            Add Farming Videos
          </h1>
          <p className="text-green-100 text-lg mt-3 max-w-2xl">
            Share useful farming tutorials, guides, and agriculture-related
            videos for farmers.
          </p>
        </div>

        <div className="w-full flex justify-center px-6 md:px-20 mt-12 mb-16">
          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
              Add New Video
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Video Title
                </label>
                <input
                  value={vedioData.title}
                  onChange={(e) =>
                    setVedioData({ ...vedioData, title: e.target.value })
                  }
                  type="text"
                  placeholder="Enter video title..."
                  className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  YouTube Video URL
                </label>
                <input
                  value={vedioData.vedioUrl}
                  onChange={(e) =>
                    setVedioData({ ...vedioData, vedioUrl: e.target.value })
                  }
                  type="text"
                  placeholder="Paste YouTube link (https://youtube.com/...)"
                  className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  value={vedioData.description}
                  onChange={(e) =>
                    setVedioData({ ...vedioData, description: e.target.value })
                  }
                  rows="4"
                  placeholder="Short description about this video..."
                  className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                onClick={handleAddVedio}
                type="button"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Add Video
              </button>
            </form>
          </div>
        </div>

        <div className="px-6 md:px-20 mb-20">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Uploaded Videos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* VIDEO CARD 1 */}
            {vedios ? (
              vedios.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-xl border overflow-hidden hover:scale-105 transition cursor-pointer"
                >
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteVedio(item._id)}
                    className="absolute bg-red-600 text-white p-2 rounded-full top-3 right-3 hover:bg-red-700 z-20"
                  >
                    <DeleteIcon fontSize="small" />
                  </button>

                  {/* YouTube Thumbnail */}
                   {<iframe
                className="w-full h-56"
                src={item.vedioUrl}
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>}

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No vedios Found....</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminVedios;
