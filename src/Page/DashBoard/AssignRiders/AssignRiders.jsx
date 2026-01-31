import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AssignRiders = () => {
  const [selectedparcelData, setSelectedParcelData] = useState(null);
  const riderModalRef = useRef();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels?delivery_status=pending-pickup`,
      );
      return res.data;
    },
  });

  // todo: invalidate query after assigning a rider 
  const { data: riders = [] } = useQuery({
    queryKey: ["riders", selectedparcelData?.senderDistrict, "available"],
    enabled: !!selectedparcelData,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&district=${selectedparcelData.senderDistrict}&workingStatus=available`,
      );
      return res.data;
    },
  });

  const openRiderModal = (parcel) => {
    setSelectedParcelData(parcel);
    console.log(parcel.senderDistrict);
    riderModalRef.current.showModal();
  };

  const handleAssignRider = (rider) => {
    const riderInfo = {
      riderID: rider._id,
      riderName: rider.name,
      riderEmail: rider.email,
      parcelID: parcels._id,
    };
    axiosSecure
      .patch(`/parcels/${selectedparcelData._id}`, riderInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          console.log(res.data);
          riderModalRef.current.close();
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider has been assigned for the parcel successfully.`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-secondary font-semibold">
        Assign Riders based on parcels {parcels.length}
      </h2>

      <div className="relative my-7 overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="bg-neutral-secondary-soft border-b border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                No
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Parcel Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Cost
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Tracking ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Pickup district
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Pickup Address
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={parcel._id}
                className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
              >
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{parcel["parcel-name"]}</td>
                <td className="px-6 py-3">{parcel.cost}</td>
                <td className="px-6 py-3">{parcel.trackingId}</td>
                <td className="px-6 py-3"> {parcel.senderDistrict}</td>
                <td className="px-6 py-3">{parcel["sender-address"]}</td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => {
                      openRiderModal(parcel);
                    }}
                    className="btn btn-sm bg-primary text-black"
                  >
                    Find Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog
        ref={riderModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{riders.length} riders are available now</p>

          <div className="table">
            <div className="relative my-7 overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
              <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="bg-neutral-secondary-soft border-b border-default">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-medium">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Rider Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Rider Email
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {riders.map((rider, index) => (
                    <tr
                      key={rider._id}
                      className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                    >
                      <td className="px-6 py-3">{index + 1}</td>
                      <td className="px-6 py-3">{rider.name}</td>
                      <td className="px-6 py-3">{rider.email}</td>
                      <td className="px-6 py-3">
                        <button
                          onClick={() => handleAssignRider(rider)}
                          className="btn bg-primary text-black"
                        >
                          Assign Rider
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
