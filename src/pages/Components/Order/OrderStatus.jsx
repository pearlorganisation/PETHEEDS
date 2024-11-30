import React from 'react';
import { format } from "date-fns";
import { TbTruckDelivery, TbClock, TbX, TbCircleCheck } from "react-icons/tb";

const OrderStatus = ({ status, createdAt }) => {
    let icon, statusText, statusColor, textColor;

    switch (status.toLowerCase()) {
        case 'on the way':
            icon = <TbTruckDelivery className="text-2xl text-blue-600" />;
            statusText = "On the Way";
            statusColor = "text-blue-700";
            textColor = "text-blue-600";
            break;
        case 'pending':
            icon = <TbTruckDelivery className="text-2xl text-blue-600" />;
            statusText = "On the Way";
            statusColor = "text-blue-700";
            textColor = "text-blue-600";
            break;
        case 'cancelled':
            icon = <TbX className="text-2xl text-red-600" />;
            statusText = "Cancelled";
            statusColor = "text-red-700";
            textColor = "text-red-600";
            break;
        case 'completed':
            icon = <TbCircleCheck className="text-2xl text-green-600" />;
            statusText = "Completed";
            statusColor = "text-green-700";
            textColor = "text-green-600";
            break;
        default:
            icon = <TbClock className="text-2xl text-gray-600" />;
            statusText = "Unknown Status";
            statusColor = "text-gray-700";
            textColor = "text-gray-600";
    }

    return (
        <div className="flex items-center space-x-4">
            {icon}
            <div>
                <p className={`text-sm font-bold ${statusColor}`}>
                    {statusText}
                </p>
                <p className={`text-xs ${textColor}`}>
                    On {format(new Date(createdAt), "EEE, d MMM yyyy")}
                </p>
            </div>
        </div>
    );
};

export default OrderStatus;