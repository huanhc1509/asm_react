const Footer = () => {
    return (
        <footer className="bg-green-900 text-white">
            <div className="mx-auto p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <p>
                            Hãy để nỗi đau tự nó tốt, và mọi người sẽ có thể đạt được nó, nhưng hãy để nó xảy ra đồng thời rằng công việc và nỗi đau sẽ rất lớn.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-facebook" /></a>
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-twitter" /></a>
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-instagram" /></a>
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-youtube" /></a>
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-tiktok" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Về Chúng Tôi</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Liên hệ với chúng tôi</a></li>
                            <li><a href="#" className="hover:underline">Về chúng tôi</a></li>
                            <li><a href="#" className="hover:underline">Cơ hội nghề nghiệp</a></li>
                            <li><a href="#" className="hover:underline">Thông tin công ty</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Hỗ Trợ</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Nhà cung cấp của chúng tôi</a></li>
                            <li><a href="#" className="hover:underline">Thanh toán</a></li>
                            <li><a href="#" className="hover:underline">Giao hàng</a></li>
                            <li><a href="#" className="hover:underline">Hủy bỏ &amp; Trả hàng</a></li>
                            <li><a href="#" className="hover:underline">Báo cáo vi phạm</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Chính Sách</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Chính sách hoàn trả</a></li>
                            <li><a href="#" className="hover:underline">Điều khoản sử dụng</a></li>
                            <li><a href="#" className="hover:underline">An ninh</a></li>
                            <li><a href="#" className="hover:underline">Quyền riêng tư</a></li>
                            <li><a href="#" className="hover:underline">Danh mục trang</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex justify-between items-center border-t border-green-800 pt-4">
                    <p>2023 hood.de, Inc.</p>
                    <div className="flex space-x-4">
                        <img src="src/assets/img/pay.png" alt="MasterCard" className="h-6" />
                    </div>
                    <a href="#" className="text-white hover:underline">Cuộn lên trên ↑</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
