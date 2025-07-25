import { Background } from '../interfaces/background';
import { Mode } from '../interfaces/Mode';

export const backgroundsList: Background[] = [
  {
    name: 'focus',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753192677/izu2f7q2nslqrq3fd8tm.jpg',
    label: 'focus'
  },
  {
    name: 'study',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753192676/bpi7air5r2bfse2jiqjd.jpg',
    label: 'Study'
  },
  {
    name: 'chill',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753192678/t1b0xmaamc7nftywer7x.png',
    label: 'Chill'
  },
  {
    name: 'night',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753192677/ogvhuuitmofxcy7rfnq1.jpg',
    label: 'Night'
  },
  {
    name: 'Anime',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753306319/psp839titviytlzmgscg.jpg',
    label: 'Anime'
  },
  {
    name: 'Spiderman',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753306319/jp4xuywzemdnkphwdrfk.jpg',
    label: 'Spiderman'
  },
  {
    name: 'Gta vi',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753306319/m8hmydcllkayreyewgor.jpg',
    label: 'GTA VI'
  },
  {
    name: 'stars',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753306319/cfykf3s1k8jvlw93bhkw.jpg',
    label: 'Stars'
  },
  {
    name: 'Chill',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753306319/dut6cxv7gejt8rfnrkik.jpg',
    label: 'Chill'
  },
  {
    name: 'asbtract',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753464841/bmzviwovfdvhmlu2ytin.jpg',
    label: 'Abstract'
  },
  {
    name: 'hot-air',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753464841/ghruobea8mzcyap6py6x.jpg',
    label: 'Hot-air'
  },
  {
    name: 'transformer',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753464842/fy9zyoo2tni0soluzowd.jpg',
    label: 'Transformer'
  },
  {
    name: 'astronaut',
    image: 'https://res.cloudinary.com/dglx7uc1t/image/upload/v1753464842/ndo7bekhszlmablifkl6.jpg',
    label: 'Astronaut'
  },
  {
    name: 'anime-video',
    image: '',
    video: 'https://res.cloudinary.com/dglx7uc1t/video/upload/v1753192683/l5723i1acrpfayl88xwn.mp4',
    label: 'Anime'
  },
  {
    name: 'particles',
    image: '',
    video: 'https://res.cloudinary.com/dglx7uc1t/video/upload/v1753464788/ry6e6nhia9auwqp4bmor.mp4',
    label: 'Particles'
  },
  {
    name: 'calm-night-video',
    image: '',
    video: 'https://res.cloudinary.com/dglx7uc1t/video/upload/v1753192683/luw8j5zcviggryva9rxk.mp4',
    label: 'Calm-night'
  },
  {
    name: 'particles-red',
    image: '',
    video: 'https://res.cloudinary.com/dglx7uc1t/video/upload/v1753464789/kxqzw8qjhfriozqgrysb.mp4',
    label: 'Particles-red'
  },
  {
    name: 'christmas-video',
    image: '',
    video: 'https://res.cloudinary.com/dglx7uc1t/video/upload/v1753192685/fbl4tkqdfskxeb4dsge4.mp4',
    label: 'Christmas'
  },
  {
    name: 'lake-video',
    image: '',
    video: 'https://res.cloudinary.com/dglx7uc1t/video/upload/v1753192684/h9o877bvvqdy23mitrit.mp4',
    label: 'Lake'
  },
  {
    name: 'mountain-snow-video',
    image: '',
    video: 'https://res.cloudinary.com/dglx7uc1t/video/upload/v1753192684/tg4vgq5cqs9cffyt6qru.mp4',
    label: 'Mountain Snow'
  },
  {
    name: 'landscape-anime-video',
    image: '',
    video: 'https://res.cloudinary.com/dglx7uc1t/video/upload/v1753192685/p0ejngal4uyl1i3f6k7n.mp4',
    label: 'Landscape'
  }
];

export const modesList: Mode[] = [
  { label: 'Pomodoro', value: 'pomodoro', minutes: 25, nextMode: 'short-break' },
  { label: 'Short break', value: 'short-break', minutes: 5, nextMode: 'pomodoro' },
  { label: 'Long break', value: 'long-break', minutes: 10, nextMode: 'pomodoro' }
];
