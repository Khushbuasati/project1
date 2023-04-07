import card1_1 from '../../../../assets/images/card1_1.png';
import card1_2 from '../../../../assets/images/card1_2.png';
import card1_3 from '../../../../assets/images/card1_3.png';
import card1_4 from '../../../../assets/images/card1_4.png';
import card1_5 from '../../../../assets/images/card1_5.png';
import card2_1 from '../../../../assets/images/card2_1.png';
import card2_2 from '../../../../assets/images/card2_2.png';
import card2_3 from '../../../../assets/images/card2_3.png';
import card2_4 from '../../../../assets/images/card2_4.png';
import card2_5 from '../../../../assets/images/card2_5.png';

function createData(name, img, URank, SRank) {
    return { name, img, URank, SRank };
}

export const card1Data = [
    createData('FlipClip: Create 2D Animation', card1_1, 'comming soon', 24),
    createData('Pokepix Color By Number', card1_2, 'comming soon', 37),
    createData('Video Downloader', card1_3, 'comming soon', 24),
    createData('Doodle Art: Magic Drawing App', card1_5, 'comming soon', 67),
    createData('Logo Maker: Graphic Design', card1_4, 'comming soon', 49),
];

export const card2Data = [
    createData('HiPaint - Sketch Draw Paint it!', card2_1, 'comming soon', 24),
    createData('Ripl: Social Media Marketing', card2_2, 'comming soon', 37),
    createData('Imgit AI art generator', card2_3, 'comming soon', 24),
    createData('Logo Maker: Logo Creator', card2_4, 'comming soon', 67),
    createData('AI Art Generator', card2_5, 'comming soon', 49),
];
