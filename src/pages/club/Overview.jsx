import React from 'react'
import "./Overview.css"
import number_player from "./assests/số cầu thủ của clb.png";
import matches_played from "./assests/số trận đã đá.png";
import total_goals from "./assests/tổng số bàn thắng.png";
import yellow_card from "./assests/số thẻ vàng.png";
import king_goals from "./assests/vua săn bàn.png";
import total_penalty from "./assests/tổng số thẻ phạt.png";
import red_card from "./assests/số thẻ đỏ.png";
import not_scored from "./assests/số trận giữ sạch lưới.png";
import img_king_goals from "./assests/image 14.png";

const Overview = () => {
    return (
        <div className='table_overview'>
            <div className='card_flex'>
                <div className='card_column'>
                    <div className='number_player_card'>
                        <img className='img' src={number_player} alt=''/>
                        <div className='text'>
                            <div className='text_card'>
                                Số cầu thủ của câu lạc bộ
                            </div>
                            <div className='content_card'>
                                25
                            </div>
                        </div>
                    </div>
                    <div className='matches_played_card'>
                        <img className='img' src={matches_played} alt='' />
                        <div className='text'>
                            <div className='text_card'>
                                Số trận đấu đã đá
                            </div>
                            <div className='content_card'>
                                25
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card_column'>
                    <div className='total_goals_card'>
                        <img className='img-flex' src={total_goals} alt='' />
                        <div className='text'>
                            <div className='text_card1'>
                                Tổng số bàn thắng
                            </div>
                            <div className='content_card1'>
                                25
                            </div>
                        </div>
                    </div>
                    <div className='number_yellow_card'>
                        <img className='img-flex' src={yellow_card} alt='' />
                        <div className='text'>
                            <div className='text_card1'>
                                Số thẻ vàng
                            </div>
                            <div className='content_card1'>
                                25
                            </div>
                        </div>
                    </div>
                    <div className='king_goals_card'>
                        <img className='img-flex' src={king_goals} alt='' />
                        <div className='text'>
                            <div className='text_card1'>
                                Vua săn bàn
                            </div>
                            <div>
                                <img className='img_king_goals' src={img_king_goals} alt='' />
                                <div className='name_king_goals'>Nguyễn Công Phượng</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card_column'>
                    <div className='total_penalty_card'>
                        <img className='img-flex' src={total_penalty} alt='' />
                        <div className='text'>
                            <div className='text_card1'>
                                Tổng số thẻ phạt
                            </div>
                            <div className='content_card1'>
                                25
                            </div>
                        </div>
                    </div>
                    <div className='number_red_card'>
                        <img className='img-flex' src={red_card} alt='' />
                        <div className='text'>
                            <div className='text_card1'>
                                Số thẻ đỏ
                            </div>
                            <div className='content_card1'>
                                25
                            </div>
                        </div>
                    </div>
                    <div className='not_scored_card'>
                        <img className='img-flex' src={not_scored} alt='' />
                        <div className='text'>
                            <div className='text_card1'>
                                Số trận giữ sạch lưới
                            </div>
                            <div className='content_card1'>
                                25
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview