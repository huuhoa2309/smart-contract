import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                    Dịch vụ cung cấp
                    <br />
                    đảm bảo tính ổn định
                </h1>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                    Sự lựa chọn tốt nhất để mua và bán tài sản tiền điện tử, nhiều dịch vụ liên kết hầu hết mang tính cầu nối
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Tính bảo mật"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="An ninh được đảm bảo. Chúng tôi luôn duy trì sự riêng tư và duy trì chất lượng sản phẩm của mình"
                />
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Tỷ giá trao đổi ngoại hối tốt nhất"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Tỷ giá trao đổi ngoại hối uy tín. Chúng tôi luôn cập nhật tỷ giá mới nhất để bạn có thể trao đổi nhanh nhất"
                />
                <ServiceCard
                    color="bg-[#F84550]"
                    title="Giao dịch linh hoạt"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Tốc độ xử lý giao dịch nhanh. Hỗ trợ liên kết nhiều đơn vị giao dịch hỗ trợ linh động. Giao dịch được đảm bảo về tốc độ xử lý"
                />
            </div>
        </div>
    </div>
);

export default Services;