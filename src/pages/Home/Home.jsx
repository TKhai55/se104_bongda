import React from 'react'
import './Home.css'
import news1 from '../Home/images/news1.jpg'
import news2 from '../Home/images/news2.jpg'
import news3 from '../Home/images/news3.jpeg'
import news4 from '../Home/images/news4.jpg'
import YoutubeEmbed from "./YoutubeEmbed"

const Home = () => {
    return (
        <div>
            <section className='Home'>
                <div className="column_left">
                    <div className='newsfeed'>
                        <div className="news">
                            <div className="img">
                                <img className='news_img' src={news1} alt="news1" />
                            </div>
                            <div className="description">
                                <a href="https://vtv.vn/bong-da-trong-nuoc/san-my-dinh-duoc-cho-phep-to-chuc-aff-cup-2022-20221030065022402.htm"
                                    target="_blank" rel="noopener noreferrer"><p className="a_detail">Sân Mỹ Đình được cho phép tổ chức AFF Cup 2022</p></a>
                                <p>VTV.vn - Sau những vấn đề liên quan về nợ thuế, khiến Sân Mỹ Đình bị đóng băng trong việc cho thuê,
                                    điều này khiến người hâm mộ lo lắng, không biết AFF Cup 2022 sẽ tổ chức ở đâu?</p>
                            </div>
                        </div>
                        <div className="news">
                            <div className="img">
                                <img className='news_img' src={news2} alt="news2" />
                            </div>
                            <div className="description">
                                <a href="https://vtv.vn/bong-da-trong-nuoc/van-quyet-gia-han-hop-dong-them-3-nam-voi-clb-ha-noi-20221028201729584.htm"
                                    target="_blank" rel="noopener noreferrer"><p className="a_detail">Văn Quyết gia hạn hợp đồng thêm 3 năm với CLB Hà Nội</p></a>
                                <p>VTV.vn - Tiền vệ Nguyễn Văn Quyết đã gia hạn hợp đồng thêm ba năm và gắn bó với CLB Hà Nội tới năm 2025.</p>
                            </div>
                        </div>
                        <div className="news">
                            <div className="img">
                                <img className='news_img' src={news3} alt="news3" />
                            </div>
                            <div className="description">
                                <a href="https://vtv.vn/bong-da-trong-nuoc/sau-vong-21-giai-hang-nhat-quoc-gia-2022-cand-gianh-ve-thang-hang-vleague-1-2023-20221025171327961.htm"
                                    target="_blank" rel="noopener noreferrer"><p className="a_detail">Sau vòng 21 giải hạng Nhất quốc gia 2022 | CAND giành vé thăng hạng V.League 1-2023
                                    </p></a>
                                <p>VTV.vn - Sau vòng đấu thứ 21, giải hạng Nhất quốc gia đã xác định được đội bóng đầu tiên giành quyền lên chơi V.League 2023.</p>
                            </div>
                        </div>
                        <div className="news">
                            <div className="img">
                                <img className='news_img' src={news4} alt="news4" />
                            </div>
                            <div className="description">
                                <a href="https://vtv.vn/bong-da-trong-nuoc/giai-thuong-qua-bong-vang-viet-nam-nam-2022-tro-lai-voi-12-hang-muc-20221027151712224.htm"
                                    target="_blank" rel="noopener noreferrer"><p className="a_detail">Giải thưởng Quả bóng vàng Việt Nam năm 2022 trở lại với 12 hạng mục</p></a>
                                <p>VTV.vn - Sáng nay 27-10, Ban tổ chức (BTC) Giải thưởng Quả bóng vàng Việt Nam 2022 tổ chức buổi họp báo công bố kế hoạch tổ chức Giải thưởng Quả bóng vàng Việt Nam 2022.</p>
                            </div>
                        </div>
                        <div className="seemore">
                            <a href="https://vtv.vn/the-thao/bong-da-trong-nuoc.htm"
                                target="_blank" rel="noopener noreferrer"><p className='btn'>Xem thêm</p></a>
                        </div>
                    </div>

                </div>
                <div className="column_right">
                    <div className='video'>
                        <h2>V.League 2022 trở lại với Trailer cực "xịn sò" I Công Phượng, Tiến Linh tung bay siêu ngầu</h2>

                        <YoutubeEmbed embedId="TdEVfWgA6a4" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home