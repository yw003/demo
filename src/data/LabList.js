import img0 from '@/assets/下载.png'
import originality from '@/assets/创意.png'
import python from '@/assets/python.png'
import threeD from '@/assets/3d.png'
import ai from '@/assets/ai.png'
import game from '@/assets/youxi.png'
import art from '@/assets/art.png'
import hardware from '@/assets/hardware.png'
import js from '@/assets/js.png'
//视频
import video0 from '@/assets/video/1.mp4'
import pythonV from '@/assets/video/python.mp4'
import kouding from '@/assets/video/kouding.mp4'
//案例图片
import exp0 from '@/assets/exp.png'
import exp1 from '@/assets/exp1.png'
import exp2 from '@/assets/exp2.png'
export function Data() {
    return {
        "pageOne": [
            {
                u_id: '00',
                img: originality,
                backColor: 'rgb(251, 232, 194)',
                title: '创意实验室',
                titleDes: ['6+岁', '创造力', '图形化'],
                contentTitle: '像搭积木一样编程创作',
                contentDes: '让学编程和搭积木一样简单，有效帮助孩子形成编程思维，锻炼逻辑思维，轻松制作有趣有料的编程项目，发挥自己的无限创意。',
                video: video0,
                exp: [exp0, exp1, exp2]
            },
            {
                u_id: '01',
                img: python,
                backColor: 'rgb(193, 223, 251)',
                title: 'Python实验室',
                titleDes: ['7+岁', '逻辑思维', 'Python'],
                contentTitle: '通用易读的编程语言',
                contentDes: '从图形化编程到文本编程，从AI应用到硬件物联，首创带有舞台区的编辑模式，运用动画和声音制作游戏，全方面体会Python语言的乐趣。',
                video: pythonV,
                exp: [exp0, exp1, exp2]
            },
            {
                u_id: '02',
                img: img0,
                title: '腾讯扣叮-编程第一课',
                backColor: 'rgb(246, 202, 219)',
                titleDes: ['6-9岁', '编程启蒙', '计算思维'],
                contentTitle: '专为6-9岁孩子定制的编程启蒙App',
                contentDes: '腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。',
                video: kouding,
                exp: [exp0, exp1, exp2]
            },
            {
                u_id: '03',
                img: threeD,
                title: '3D实验室',
                backColor: 'rgb(187, 255, 245)',
                titleDes: ['6岁+', '创造力', '3D立体'],
                contentTitle: '创意实验室的3D版本',
                contentDes: '扣叮和艾兰岛共同出品，学会了创意实验室就可以轻松上手，培养空间思维，制作3D创意作品。也可前往艾兰岛官网体验更专业的游戏编辑器。',
                video: video0,
                // exp: [exp0, exp1, exp2]
            },
            {
                u_id: '04',
                img: ai,
                title: '人工智能实验室',
                backColor: 'rgb(193, 244, 236)',
                titleDes: ['10+岁', '前沿科技', '走进ai'],
                contentTitle: '算法模型，感受前沿科技',
                contentDes: '初学者直接应用简单的AI能力（拍照识花、语音识别、智能聊天等），体会AI的乐趣；高阶学习者参与常见算法模型的调参过程，学习AI的底层逻辑。',
                video: video0,
                exp: [exp0, exp1, exp2]
            },
            {
                u_id: '05',
                img: game,
                title: '游戏实验室',
                backColor: 'rgb(220, 199, 251)',
                titleDes: ['6-8岁', '创意游戏', '零基础'],
                contentTitle: '图形化编程，创意游戏闯关',
                contentDes: '积木块拼接而成的丰富多彩的创意游戏世界，零基础小朋友也可以通过图形化编程进行寻路闯关。',
                video: video0,
                // exp: [exp0, exp1, exp2]
            },
            {
                u_id: '06',
                img: art,
                title: '艺术(p5)实验室',
                backColor: 'rgb(246, 202, 219)',
                titleDes: ['7+岁', '艺术表达', '数理知识'],
                contentTitle: '用编程进行艺术表达',
                contentDes: '将编程与艺术、数学等STEAM多方面知识相结合，制作可视化的艺术案例，激发学生的想象力和创造力，帮助更好地学习理解数理知识。',
                video: video0,
                exp: [exp0, exp1, exp2]
            },
        ],
        'pagetwo': [
            {
                u_id: '07',
                img: hardware,
                title: '硬件实验室',
                backColor: 'rgb(193, 244, 236)',
                titleDes: ['6+岁', '软硬结合', '创客教育'],
                contentTitle: '软硬件结合的编程体验',
                contentDes: '通过过在线编程，控制Arduino、micro:bit、OpenAIE、CocoRobo等教育硬件，并同时支持积木和代码两种模式，体会软硬结合的编程学习。',
                video: video0,
                // exp: [exp0, exp1, exp2]
            },
            {
                u_id: '08',
                img: js,
                title: 'JS实验室',
                backColor: 'rgb(251, 232, 194)',
                titleDes: ['7+岁', '前端开发', 'JavaScript'],
                contentTitle: '面向对象的Web语言',
                contentDes: '从积木命令到文本代码，从形状绘制到精灵动画，引导掌握计算机科学知识，从易到难感受JavaScript语言的魅力。',
                video: video0,
                exp: [exp0, exp1, exp2]
            },
        ]
    }
}