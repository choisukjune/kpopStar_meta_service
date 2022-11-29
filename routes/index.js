var express = require('express');
var router = express.Router();

global.data = {
    "GAIN": {
        "names": {
            "KO": "가인",
            "EN": "Gain"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCrpiYiHmGZ5Vq2Pm5ykdX7w",
            "instagram": "https://www.instagram.com/songain87/",
            "spotify": "https://open.spotify.com/artist/4R60A85t9mTZzCqJlVswuo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800539/80053909.jpg"
    },
    "KAACHI": {
        "names": {
            "KO": "가치",
            "EN": "KAACHI "
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCA5js_r40uQ-K-JnlhsnPCA",
            "instagram": "https://www.instagram.com/kaachi_official/",
            "twitter": "https://twitter.com/kaachiofficial",
            "spotify": "https://open.spotify.com/artist/5TOh2OfcFzmDgF6fJa2Miq",
            "tiktok": "https://www.tiktok.com/@kaachi_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201068/20106864.jpg"
    },
    "Gaho": {
        "names": {
            "KO": "가호",
            "EN": "Gaho"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCPrZw0nD0YuerkH-iQg8VNA",
            "instagram": "https://www.instagram.com/ad_gaho/",
            "twitter": "https://twitter.com/gaho88882970",
            "spotify": "https://open.spotify.com/artist/3ybZTNrlK0QhL4rBxfLHOc"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802979/80297924.jpg"
    },
    "GOT7": {
        "names": {
            "KO": "갓세븐",
            "EN": "GOT7"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCNtZPzvkjjB3EuPMNY71cmA",
            "instagram": "https://www.instagram.com/got7.with.igot7/",
            "twitter": "https://twitter.com/GOT7Official",
            "spotify": "https://open.spotify.com/artist/6nfDaffa50mKtEOwR8g4df",
            "tiktok": "https://www.tiktok.com/@got7official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801782/80178297.jpg"
    },
    "KANGDANIEL": {
        "names": {
            "KO": "강다니엘",
            "EN": "KANG DANIEL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCHGJwrjlY6rmZJInxRmiztA",
            "instagram": "https://www.instagram.com/daniel.k.here/",
            "twitter": "https://twitter.com/konnect_danielk/",
            "spotify": "https://open.spotify.com/artist/5vGoWnZO65NBgiZYBmi3iW",
            "tiktok": "https://www.tiktok.com/@konnect_kangdaniel"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288422.jpg"
    },
    "KANGMINKYUNG": {
        "names": {
            "KO": "강민경",
            "EN": "KANG MINKYUNG"
        },
        "sns": {
            "instagram": "https://www.instagram.com/iammingki/",
            "twitter": "https://twitter.com/iamkmk",
            "spotify": "https://open.spotify.com/artist/15Dv0lqpiL5zD6OqqwUEP4"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800415/80041587.jpg"
    },
    "KANGSEUNGYOON": {
        "names": {
            "KO": "강승윤",
            "EN": "KANG SEUNG YOON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCwK_qfZgBkFpvSygztZCYLg",
            "instagram": "https://www.instagram.com/w_n_r00/",
            "twitter": "https://twitter.com/official_yoon_/",
            "spotify": "https://open.spotify.com/artist/2Ip3x4XtEEhlGg8qI146jL"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800795/80079589.jpg"
    },
    "KANGHYEWON": {
        "names": {
            "KO": "강혜원",
            "EN": "KANG HYE WON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCGsmowjz7ctm9jiKbnmF8EA",
            "instagram": "https://www.instagram.com/hyemhyemu/",
            "twitter": "https://twitter.com/hyemu_official",
            "spotify": "https://open.spotify.com/artist/7dwHrGGWiw44ny2dJcARu6"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803219/80321905.jpg"
    },
    "Gary": {
        "names": {
            "KO": "개리",
            "EN": "Gary"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCguxVQUEtEIa6hcgZdhj_yA",
            "instagram": "https://www.instagram.com/kanggary_yangban/",
            "twitter": "https://twitter.com/kanggary58",
            "spotify": "https://open.spotify.com/artist/5myBH2YqzOgyWoTKCsydAi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/65/6544.jpg"
    },
    "GUMMY": {
        "names": {
            "KO": "거미",
            "EN": "GUMMY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCgsyE-LCoaHPKyk3rCnapAg",
            "spotify": "https://open.spotify.com/artist/0hRHbwZ0xSwfVHl4FTv7jq"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/377/37724.jpg"
    },
    "GIRLSDAY": {
        "names": {
            "KO": "걸스데이",
            "EN": "GIRL`S DAY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCw-HcGlT9V7ErYfoAPvem4A",
            "instagram": "https://www.instagram.com/dte_girlsday/",
            "twitter": "https://twitter.com/Girls_Day",
            "fancafe": "http://cafe.daum.net/Girlsday5",
            "spotify": "https://open.spotify.com/artist/13kJgvU22LHMsJtGWLmx7W"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800737/80073726.jpg"
    },
    "GIRLKIND": {
        "names": {
            "KO": "걸카인드",
            "EN": "GIRLKIND"
        },
        "sns": {
            "instagram": "https://www.instagram.com/girlkind_nextlevel/",
            "fancafe": "http://cafe.daum.net/girlkind",
            "spotify": "https://open.spotify.com/artist/2TqCaaZ0Yh9MtRVYnoZg8K"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802984/80298422.jpg"
    },
    "TheBlackSkirts": {
        "names": {
            "KO": "검정치마",
            "EN": "The Black Skirts"
        },
        "sns": {
            "instagram": "https://www.instagram.com/holideez/",
            "spotify": "https://open.spotify.com/artist/6WeDO4GynFmK4OxwkBzMW8"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800505/80050546.jpg"
    },
    "GYEONGREE": {
        "names": {
            "KO": "경리",
            "EN": "GYEONGREE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/gyeongree/",
            "twitter": "https://twitter.com/ice_gang"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801191/80119108.jpg"
    },
    "GHOST9": {
        "names": {
            "KO": "고스트나인",
            "EN": "GHOST9"
        },
        "sns": {
            "instagram": "https://www.instagram.com/official.ghost9/",
            "twitter": "https://twitter.com/GHOST9OFFICIAL",
            "fancafe": "http://cafe.daum.net/MAROOcreative",
            "spotify": "https://open.spotify.com/artist/7f953Uuid7Xrd0nXQ3V3s1",
            "tiktok": "https://www.tiktok.com/@iamnotjustin"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803463/80346330.jpg"
    },
    "GoldenChild": {
        "names": {
            "KO": "골든차일드",
            "EN": "Golden Child"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC2EeIV6pzZDIAgp8hV_MGew",
            "instagram": "https://www.instagram.com/official_gncd11/",
            "twitter": "https://twitter.com/GoldenChild",
            "fancafe": "http://cafe.daum.net/GoldenChild",
            "spotify": "https://open.spotify.com/artist/5zShiwTHlygdfsXj6eavTu",
            "tiktok": "https://www.tiktok.com/@goldenchildofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802893/80289387.jpg"
    },
    "Minzy": {
        "names": {
            "KO": "공민지",
            "EN": "Minzy"
        },
        "sns": {
            "instagram": "https://www.instagram.com/_minzy_mz/",
            "twitter": "https://twitter.com/mingkki21",
            "spotify": "https://open.spotify.com/artist/1ql28OzmgulHG2ldXFrbWp",
            "tiktok": "https://www.tiktok.com/@_minzy_mz"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80135/8013504.jpg"
    },
    "GWSN": {
        "names": {
            "KO": "공원소녀",
            "EN": "Girls in the Park"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCUT58qBbE4Y3Y4FClOJOfrg",
            "instagram": "https://www.instagram.com/gwsn.official/",
            "twitter": "https://twitter.com/official_GWSN",
            "fancafe": "http://cafe.daum.net/GWSN",
            "spotify": "https://open.spotify.com/artist/5fI4xffqGRGQvICSlJreMF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803194/80319476.jpg"
    },
    "KWAKJINEON": {
        "names": {
            "KO": "곽진언",
            "EN": "KWAK JIN EON"
        },
        "sns": {
            "instagram": "https://www.instagram.com/kwakjineon/",
            "spotify": "https://open.spotify.com/artist/4xQ4GjBomHvTRL1GO624zd"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801871/80187125.jpg"
    },
    "gugudan": {
        "names": {
            "KO": "구구단",
            "EN": "gugudan"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCAZrFlkKqpTqn8ZISJ616xg",
            "instagram": "https://www.instagram.com/gu9udan/",
            "twitter": "https://twitter.com/gu9udan",
            "fancafe": "http://cafe.daum.net/gu9udan",
            "spotify": "https://open.spotify.com/artist/0h7XZWgoxlY49uSUj7MVRY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802629/80262984.jpg"
    },
    "Guckkasten": {
        "names": {
            "KO": "국카스텐",
            "EN": "Guckkasten"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC1UWhd_JMdh8zrLvjtXgjhQ",
            "instagram": "https://www.instagram.com/guckkasten_official/",
            "twitter": "https://twitter.com/Guckkastens",
            "spotify": "https://open.spotify.com/artist/71kRpwy6xTeG2OXXkRJdkA"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800520/80052013.jpg"
    },
    "GOODDAY": {
        "names": {
            "KO": "굿데이",
            "EN": "GOOD DAY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/goodday_c9/",
            "fancafe": "http://cafe.daum.net/goodday-c9",
            "spotify": "https://open.spotify.com/artist/5efyofLNbVBEY6J8M6I3mr"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802895/80289508.jpg"
    },
    "KWONEUNBI": {
        "names": {
            "KO": "권은비",
            "EN": "KWON EUN BI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCoCvj_VhZPOtttlJK7RCh2A",
            "instagram": "https://www.instagram.com/silver_rain.__/",
            "twitter": "https://twitter.com/KWONEUNBI/",
            "spotify": "https://open.spotify.com/artist/0qr7Rhj0yU7BPySYecNUlm"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803219/80321904.jpg"
    },
    "KwonJinAh": {
        "names": {
            "KO": "권진아",
            "EN": "Kwon Jin Ah"
        },
        "sns": {
            "instagram": "https://www.instagram.com/kwonhodoo/",
            "spotify": "https://open.spotify.com/artist/0kRAVpQhUUArA8UnYwEdeZ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801827/80182768.jpg"
    },
    "VIINI": {
        "names": {
            "KO": "권현빈",
            "EN": "VIINI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCn7SKWc6R6f1Z7hz5CKAIcw",
            "twitter": "https://twitter.com/VIINIHBofficial",
            "instagram": "http://www.instagram.com/komurola/",
            "spotify": "https://open.spotify.com/artist/1BqI1HGTzHx6abI5iBVz2F"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802927/80292720.jpg"
    },
    "KYUHYUN": {
        "names": {
            "KO": "규현",
            "EN": "KYUHYUN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-QTYOUwcMm-rWCctXiavzA",
            "twitter": "https://twitter.com/GaemGyu",
            "instagram": "https://www.instagram.com/gyuram88/",
            "spotify": "https://open.spotify.com/artist/0il5ZP3xYOECtONJtZ38Ln"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800183/80018391.jpg"
    },
    "GRAY": {
        "names": {
            "KO": "그레이",
            "EN": "GRAY"
        },
        "sns": {
            "twitter": "https://twitter.com/callmeGRAY",
            "instagram": "https://www.instagram.com/callmegray/",
            "spotify": "https://open.spotify.com/artist/3kPEBSt7qgVoRZSbIXMr7W",
            "tiktok": "https://www.tiktok.com/@callmegray"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801271/80127103.jpg"
    },
    "GroovyRoom": {
        "names": {
            "KO": "그루비룸",
            "EN": "GroovyRoom"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCSOCNcBfiByb4cr3LLL8V8w",
            "spotify": "https://open.spotify.com/artist/29HqjVbJr3vsc2l6BTI4eB"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200107/20010769.jpg"
    },
    "GIRIBOY": {
        "names": {
            "KO": "기리보이",
            "EN": "GIRIBOY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCAqcRG13AlJRbtQC-gnfx8w",
            "instagram": "https://www.instagram.com/giriboy91/",
            "spotify": "https://open.spotify.com/artist/2MtHuR0W2idZdF7x4wddqq",
            "tiktok": "https://www.tiktok.com/@giriboy_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801144/80114466.jpg"
    },
    "KIHYUN": {
        "names": {
            "KO": "기현",
            "EN": "KIHYUN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yookihhh/",
            "spotify": "https://open.spotify.com/artist/52MWHSohXVqTyGhBPRJepS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802172/80217262.jpg"
    },
    "KimNaYoung": {
        "names": {
            "KO": "김나영",
            "EN": "Kim Na Young"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/4dvmLXorXADxVq8EcySEWk"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801733/80173310.jpg"
    },
    "KimNamJoo": {
        "names": {
            "KO": "김남주",
            "EN": "Kim Nam Joo"
        },
        "sns": {
            "instagram": "https://www.instagram.com/sarangdungy/",
            "twitter": "https://twitter.com/APINKKNJ",
            "spotify": "https://open.spotify.com/artist/1coxOrU1nr3pjo8KgThKFS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800984/80098466.jpg"
    },
    "KIMDONGRYUL": {
        "names": {
            "KO": "김동률",
            "EN": "KIM DONG RYUL"
        },
        "sns": {
            "twitter": "https://twitter.com/dongryulkim",
            "spotify": "https://open.spotify.com/artist/3zYyfrb4r6ZHI5Di0rB9bV"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/42/4265.jpg"
    },
    "KIMDONGWAN": {
        "names": {
            "KO": "김동완",
            "EN": "KIM DONG WAN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCNwjaN9w8W2RnZqbE4A0UcA",
            "twitter": "https://twitter.com/kdw_official",
            "spotify": "https://open.spotify.com/artist/0s0HWhClc8tr4PCgbX2iUY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/16/1638.jpg"
    },
    "KIMDONGJUN": {
        "names": {
            "KO": "김동준",
            "EN": "KIM DONG JUN"
        },
        "sns": {
            "twitter": "https://twitter.com/Official_KDJ",
            "instagram": "https://www.instagram.com/super_d.j/",
            "spotify": "https://open.spotify.com/artist/2nWTAX3yPvKUuynKML9Kvv",
            "tiktok": "https://www.tiktok.com/@kimdongjun_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800628/80062878.jpg"
    },
    "KIMDONGHAN": {
        "names": {
            "KO": "김동한",
            "EN": "KIM DONG HAN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCulfimfk8XTGsSNHhXZtSyQ",
            "instagram": "https://www.instagram.com/don9_han/",
            "twitter": "https://twitter.com/KDH_official",
            "fancafe": "http://cafe.daum.net/kimdonghanofficial",
            "spotify": "https://open.spotify.com/artist/1iGenyJQdF1y4bV4GAvNmW"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802927/80292719.jpg"
    },
    "KimMinSeok": {
        "names": {
            "KO": "김민석",
            "EN": "Kim MinSeok"
        },
        "sns": {
            "instagram": "http://www.instagram.com/m_l_i_j_201/",
            "spotify": "https://open.spotify.com/artist/3CHn74oCO6xiThDGQcDMeA"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802231/80223134.jpg"
    },
    "KIMBUMSOO": {
        "names": {
            "KO": "김범수",
            "EN": "KIM BUMSOO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCBbzEzAP62hU4sf2cN9ejTg",
            "instagram": "https://www.instagram.com/bsk_world/",
            "twitter": "https://twitter.com/BSKworld",
            "spotify": "https://open.spotify.com/artist/20K5puLWHL28ckI4LjieDt"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/68/6886.jpg"
    },
    "KIMSUNGKYU": {
        "names": {
            "KO": "김성규",
            "EN": "KIM SUNG KYU"
        },
        "sns": {
            "instagram": "https://www.instagram.com/gyu357/",
            "spotify": "https://open.spotify.com/artist/56mV6FhCrg12O6mOTLxo73"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800705/80070516.jpg"
    },
    "KIMSEJEONG": {
        "names": {
            "KO": "김세정",
            "EN": "KIM SE JEONG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCq5CDi36d6UPh_wlKl-0TUA",
            "instagram": "https://instagram.com/clean_0828/",
            "twitter": "https://twitter.com/0828_kimsejeong",
            "spotify": "https://open.spotify.com/artist/1lFLniFTaPjYCtQZvDXpqu"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802590/80259078.jpg"
    },
    "KimYoungChul": {
        "names": {
            "KO": "김영철",
            "EN": "Kim YoungChul"
        },
        "sns": {
            "instagram": "https://www.instagram.com/luxekim/",
            "twitter": "https://twitter.com/CalebYC",
            "spotify": "https://open.spotify.com/artist/6PpuhpJOZ598rVzlvSj2Ea"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200370/20037013.jpg"
    },
    "KIMYOHAN": {
        "names": {
            "KO": "김요한",
            "EN": "KIM YO HAN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/y_haa.n/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803337/80333798.jpg"
    },
    "JINLONGUO": {
        "names": {
            "KO": "김용국",
            "EN": "JINLONGUO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCHwCLdZcXBPn_WvQ2sWdeWQ",
            "twitter": "https://twitter.com/LONGGUOofficial",
            "instagram": "https://www.instagram.com/jinlongguo.official/",
            "fancafe": "http://cafe.daum.net/jinlongguoofficial",
            "spotify": "https://open.spotify.com/artist/5o1rUxloqrS8OBKkdUOr7D"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802883/80288344.jpg"
    },
    "KIMWOOSEOK": {
        "names": {
            "KO": "김우석",
            "EN": "KIM WOO SEOK"
        },
        "sns": {
            "instagram": "https://instagram.com/woo.ddadda/",
            "twitter": "https://twitter.com/KWS_official_",
            "spotify": "https://open.spotify.com/artist/4k2MyP64uZ78mvjKd1Ciq2",
            "tiktok": "https://www.tiktok.com/@kws_official_"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802512/80251228.jpg"
    },
    "KIMWOOJIN": {
        "names": {
            "KO": "김우진",
            "EN": "KIM WOOJIN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCdhdg9ISE9OYvL8uR9gIzNw",
            "twitter": "https://twitter.com/woooojinn",
            "instagram": "https://www.instagram.com/woooojin0408/",
            "spotify": "https://open.spotify.com/artist/2jAhpp38AMZvTHud2OJbvM"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802937/80293781.jpg"
    },
    "KimYuna": {
        "names": {
            "KO": "김윤아",
            "EN": "Kim Yun A"
        },
        "sns": {
            "instagram": "https://www.instagram.com/love__yuna/",
            "twitter": "https://twitter.com/love_yuna"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/16/1660.jpg"
    },
    "KimJaeJoong": {
        "names": {
            "KO": "김재중",
            "EN": "Kim Jae Joong"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCkDL3JYoQIZAq-CdPMoPXwQ",
            "twitter": "https://twitter.com/bornfreeonekiss",
            "instagram": "https://www.instagram.com/jj_1986_jj/",
            "spotify": "https://open.spotify.com/artist/2x4LoC3la2S3aUHxaP8w1T"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800011/80001102.jpg"
    },
    "KIMJAEHWAN": {
        "names": {
            "KO": "김재환",
            "EN": "KIM JAE HWAN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC1RjCqJ8nlQq-kx7mXYhPWg",
            "twitter": "https://twitter.com/KJH_officialtwt",
            "instagram": "https://www.instagram.com/jaehwan0527/",
            "fancafe": "http://cafe.daum.net/KJHOfficial",
            "spotify": "https://open.spotify.com/artist/7LdZwtnhfB1GoC9SE9tvyb",
            "tiktok": "https://www.tiktok.com/@kjh_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288425.jpg"
    },
    "KimJiSoo": {
        "names": {
            "KO": "김지수",
            "EN": "Kim Ji Soo"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jisooage/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800795/80079591.jpg"
    },
    "JINU": {
        "names": {
            "KO": "김진우",
            "EN": "JINU"
        },
        "sns": {
            "instagram": "https://www.instagram.com/xxjjjwww/",
            "twitter": "https://twitter.com/official_jinu_",
            "spotify": "https://open.spotify.com/artist/10lR6OAc74wnyP1P8Gfsct"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802009/80200906.jpg"
    },
    "JinHoKim": {
        "names": {
            "KO": "김진호",
            "EN": "Jin Ho Kim"
        },
        "sns": {
            "instagram": "https://www.instagram.com/moksolee/",
            "spotify": "https://open.spotify.com/artist/2Lrqft0CCKgJTZG2q0OvsI"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800003/80000376.jpg"
    },
    "KimTaeWoo": {
        "names": {
            "KO": "김태우",
            "EN": "KIM TAE WOO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/soulking191/",
            "spotify": "https://open.spotify.com/artist/5OFQZvle7HH55LvauNmUIi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/48/4841.jpg"
    },
    "KimFeel": {
        "names": {
            "KO": "김필",
            "EN": "Kim Feel"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCpVAQ0XOruoDl64x97LHAHA",
            "instagram": "https://www.instagram.com/sincerelyfeel/",
            "twitter": "https://twitter.com/KIMFEELofficial",
            "spotify": "https://open.spotify.com/artist/4EPYWwU4c8eG2GzD7MenUA"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801082/80108222.jpg"
    },
    "HAON": {
        "names": {
            "KO": "김하온",
            "EN": "HAON"
        },
        "sns": {
            "instagram": "https://www.instagram.com/noahmik/",
            "spotify": "https://open.spotify.com/artist/2krUNMgFZYm5s4Nn0g91W9"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200542/20054237.jpg"
    },
    "KIMHYUNJOONG": {
        "names": {
            "KO": "김현중",
            "EN": "KIMHYUNJOONG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UChLhv-ieQocUpEOFv2rJyUA",
            "instagram": "https://www.instagram.com/hyunjoong860606/",
            "spotify": "https://open.spotify.com/artist/0rB9P2J3OkobNezpTBcXqE"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800101/80010115.jpg"
    },
    "KIMHOJOONG": {
        "names": {
            "KO": "김호중",
            "EN": "KIMHOJOONG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC73yn5mmJSr3hh9jKe2AdWw",
            "instagram": "https://www.instagram.com/hojoongng/",
            "spotify": "https://open.spotify.com/artist/4T9AuhR3YqSqaPgXzPiAuH"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801504/80150416.jpg"
    },
    "KimHeeJae": {
        "names": {
            "KO": "김희재",
            "EN": "Kim Hee Jae"
        },
        "sns": {
            "instagram": "https://www.instagram.com/heejae_one/",
            "fancafe": "http://cafe.daum.net/heejae-star",
            "spotify": "https://open.spotify.com/artist/02mf5BLKtAfIkAKozHPmU5"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201002/20100267.jpg"
    },
    "KIMHEECHUL": {
        "names": {
            "KO": "김희철",
            "EN": "KIM HEE CHUL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCldBBBC3KowWN7ScJRQlZyg",
            "instagram": "https://www.instagram.com/kimheenim/",
            "spotify": "https://open.spotify.com/artist/7GbN8yzIP7CFK5bNbUi6L3"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800135/80013535.jpg"
    },
    "leeeunsang": {
        "names": {
            "KO": "이은상",
            "EN": "Lee Eun Sang"
        },
        "sns": {
            "instagram": "https://www.instagram.com/2eunsang_official/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803338/80333803.jpg"
    },
    "NADA": {
        "names": {
            "KO": "나다",
            "EN": "NADA"
        },
        "sns": {
            "instagram": "https://www.instagram.com/nastynada/",
            "twitter": "https://twitter.com/OfficialGZ_NADA",
            "spotify": "https://open.spotify.com/artist/7ChvtubiE0RWxhHZdb4RHu",
            "tiktok": "https://www.tiktok.com/@nastynada"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801623/80162393.jpg"
    },
    "NATTY": {
        "names": {
            "KO": "나띠",
            "EN": "NATTY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/natty_0530/",
            "twitter": "https://twitter.com/NToffcl_twt",
            "spotify": "https://open.spotify.com/artist/1Y3klzPXyHrinIk3tQ20Se",
            "tiktok": "https://www.tiktok.com/@nt.offcl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201071/20107188.jpg"
    },
    "Narsha": {
        "names": {
            "KO": "나르샤",
            "EN": "Narsha"
        },
        "sns": {
            "twitter": "https://twitter.com/flyx2NAL",
            "instagram": "https://www.instagram.com/narsha81/",
            "spotify": "https://open.spotify.com/artist/1OWVHV30ai3o8cgOTBVd72"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800206/80020682.jpg"
    },
    "Naul": {
        "names": {
            "KO": "나얼",
            "EN": "Naul"
        },
        "sns": {
            "instagram": "https://www.instagram.com/rrace/",
            "twitter": "https://twitter.com/YooNaul",
            "spotify": "https://open.spotify.com/artist/22oiFjlZPKJ1XphV2et1u1"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/36/3674.jpg"
    },
    "NAYEON": {
        "names": {
            "KO": "나연",
            "EN": "NAYEON"
        },
        "sns": {
            "instagram": "https://www.instagram.com/nayeonyny/",
            "spotify": "https://open.spotify.com/artist/1VwDG9aBflQupaFNjUru9A"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802505/80250504.jpg"
    },
    "nafla": {
        "names": {
            "KO": "나플라",
            "EN": "nafla"
        },
        "sns": {
            "instagram": "https://www.instagram.com/nasungcityboy/",
            "spotify": "https://open.spotify.com/artist/3Zn6C68VCosoQrxu4D2Btr"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80578/8057892.jpg"
    },
    "NAMWOOHYUN": {
        "names": {
            "KO": "남우현",
            "EN": "NAM WOO HYUN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/nwh91/",
            "twitter": "https://twitter.com/wowwh",
            "spotify": "https://open.spotify.com/artist/2TYMXWSySlq8RgLAYd8MCg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800705/80070519.jpg"
    },
    "NamTaehyun": {
        "names": {
            "KO": "남태현",
            "EN": "Nam Taehyun"
        },
        "sns": {
            "instagram": "https://www.instagram.com/souththth/",
            "spotify": "https://open.spotify.com/artist/2LQ4Ay1ClURp2tX1eFJiWh"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802841/80284191.jpg"
    },
    "Nucksal": {
        "names": {
            "KO": "넉살",
            "EN": "Nucksal"
        },
        "sns": {
            "instagram": "https://www.instagram.com/nucksal/",
            "spotify": "https://open.spotify.com/artist/6v5cGuRCZKq08nLI4WXJuB",
            "tiktok": "https://www.tiktok.com/@nucksal"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801195/80119549.jpg"
    },
    "NATURE": {
        "names": {
            "KO": "네이처",
            "EN": "NATURE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCVwEjskMa1m7ewjy0FGEHWQ",
            "instagram": "https://www.instagram.com/nature.nchworld/",
            "twitter": "https://twitter.com/nature_nchworld",
            "fancafe": "http://cafe.daum.net/nature.nchworld",
            "spotify": "https://open.spotify.com/artist/5WUom9mTTEewPdUmI4qnQi",
            "tiktok": "https://www.tiktok.com/@nature__official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200621/20062145.jpg"
    },
    "NELL": {
        "names": {
            "KO": "넬",
            "EN": "NELL"
        },
        "sns": {
            "instagram": "https://www.instagram.com/spacebohemians/",
            "twitter": "https://twitter.com/spacebohemian",
            "fancafe": "http://cafe.daum.net/lovenellj",
            "spotify": "https://open.spotify.com/artist/5WY88tCMFA6J6vqSN3MmDZ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/75/7536.jpg"
    },
    "NOEL": {
        "names": {
            "KO": "노을",
            "EN": "NOEL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnLNyGhs-anMAWiNmNHujhw",
            "instagram": "https://www.instagram.com/noel_kyunsung/",
            "spotify": "https://open.spotify.com/artist/2G5VFTwwlZUulCbtPbc1nx"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/377/37709.jpg"
    },
    "NUEST": {
        "names": {
            "KO": "뉴이스트",
            "EN": "NUEST"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCUuyrV8JDv5UAMW2StsL-NA",
            "twitter": "https://twitter.com/NUESTNEWS",
            "instagram": "https://www.instagram.com/nuest_official/",
            "fancafe": "http://cafe.daum.net/nuest",
            "spotify": "https://open.spotify.com/artist/1iQfn1B8V25iQoolQakyAZ",
            "tiktok": "https://www.tiktok.com/@nuest_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801222/80122235.jpg"
    },
    "NewJeans": {
        "names": {
            "KO": "뉴진스",
            "EN": "NewJeans"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw",
            "twitter": "https://twitter.com/NewJeans_ADOR",
            "instagram": "https://www.instagram.com/newjeans_official/",
            "spotify": "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201643/20164333.jpg"
    },
    "NewKidd": {
        "names": {
            "KO": "뉴키드",
            "EN": "NewKidd"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCwcComtoKBaQMNiqLGlan1g",
            "twitter": "https://twitter.com/jflo_newkidd",
            "instagram": "https://www.instagram.com/jflo_newkidd/",
            "fancafe": "http://cafe.daum.net/jfloNewkidd",
            "spotify": "https://open.spotify.com/artist/1ASod2UqIYzO1NGvj1zTgW",
            "tiktok": "https://www.tiktok.com/@jflo_newkidd"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803304/80330478.jpg"
    },
    "NOIR": {
        "names": {
            "KO": "느와르",
            "EN": "NOIR"
        },
        "sns": {
            "twitter": "https://twitter.com/Noir__official",
            "instagram": "https://www.instagram.com/noir_official__/",
            "fancafe": "http://cafe.daum.net/Noir.luk",
            "spotify": "https://open.spotify.com/artist/5TxoDjQBAZwKnuycBAmHZ3",
            "tiktok": "https://www.tiktok.com/@noir_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200509/20050916.jpg"
    },
    "NIEL": {
        "names": {
            "KO": "니엘",
            "EN": "NIEL"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/1wPvrQKu6dJBeLimAntEuH"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800738/80073840.jpg"
    },
    "NICHKHUN": {
        "names": {
            "KO": "닉쿤",
            "EN": "NICHKHUN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/khunsta0624/",
            "twitter": "https://twitter.com/Khunnie0624",
            "spotify": "https://open.spotify.com/artist/3z8kQKCYy5W82nZjl3ydEh"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80133/8013304.jpg"
    },
    "DAVICHI": {
        "names": {
            "KO": "다비치",
            "EN": "DAVICHI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCwZMmIVr07VLAfNcuqg9LZA",
            "instagram": "https://www.instagram.com/davichi.official/",
            "twitter": "https://twitter.com/officialdavichi",
            "fancafe": "http://cafe.daum.net/-.-.....",
            "spotify": "https://open.spotify.com/artist/4z6yrDz5GfKXkeQZjOaZdq"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800414/80041466.jpg"
    },
    "Dynamicduo": {
        "names": {
            "KO": "다이나믹 듀오",
            "EN": "Dynamicduo"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/4nvFFLtv7ZqoTr83387uK4"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/652/65291.jpg"
    },
    "DIA": {
        "names": {
            "KO": "다이아",
            "EN": "DIA"
        },
        "sns": {
            "instagram": "https://www.instagram.com/mbk.dia/",
            "twitter": "https://twitter.com/dia_official",
            "fancafe": "http://cafe.daum.net/officialdia",
            "spotify": "https://open.spotify.com/artist/5Pcx98OUnL52aGZRRQx5v8"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802472/80247213.jpg"
    },
    "DKB": {
        "names": {
            "KO": "다크비",
            "EN": "DKB"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCCwfiPqSomsqZkkmbjPK5wg",
            "instagram": "https://www.instagram.com/official.dkb/",
            "twitter": "https://twitter.com/DKB_BRAVE",
            "fancafe": "http://cafe.daum.net/officialDKB",
            "spotify": "https://open.spotify.com/artist/4DoedGw38ubJdAT1edFsIx",
            "tiktok": "https://www.tiktok.com/@official.dkb"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201007/20100749.jpg"
    },
    "Dalshabet": {
        "names": {
            "KO": "달샤벳",
            "EN": "Dal★Shabet"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCCZScmulXzGFCpnEQg7aR4w",
            "twitter": "https://twitter.com/dalshabet",
            "spotify": "https://open.spotify.com/artist/10xsuRNvidaOLxWd3fRIel"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800905/80090511.jpg"
    },
    "DALSOOOBIN": {
        "names": {
            "KO": "달수빈",
            "EN": "DALSOOOBIN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/dalsooobin/",
            "twitter": "https://twitter.com/dal_sooobin",
            "fancafe": "http://cafe.daum.net/DALSOOOBIN"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800906/80090673.jpg"
    },
    "TheRose": {
        "names": {
            "KO": "더 로즈",
            "EN": "The Rose"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UClcbcYLmTpDeuK1EFeqh5uA",
            "twitter": "https://twitter.com/TheRose_0803",
            "instagram": "https://www.instagram.com/official_therose/",
            "fancafe": "http://cafe.daum.net/TheRose",
            "spotify": "https://open.spotify.com/artist/5na1LmEmK2VzNLje9snJYW"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200420/20042013.jpg"
    },
    "TheQuiett": {
        "names": {
            "KO": "더 콰이엇",
            "EN": "The Quiett"
        },
        "sns": {
            "instagram": "https://www.instagram.com/thequiett/",
            "spotify": "https://open.spotify.com/artist/2qI1pO64eYqGUiv1XTw4cy"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/333/33303.jpg"
    },
    "THEBOYZ": {
        "names": {
            "KO": "더보이즈",
            "EN": "THE BOYZ"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCkJ1rbOrsyPfBuHNfnLPm-Q",
            "instagram": "https://www.instagram.com/official_theboyz/",
            "twitter": "https://twitter.com/WE_THE_BOYZ",
            "fancafe": "http://cafe.daum.net/officialTHEBOYZ",
            "spotify": "https://open.spotify.com/artist/0CmvFWTX9zmMNCUi6fHtAx",
            "tiktok": "https://www.tiktok.com/@istent_theboyz"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200476/20047680.jpg"
    },
    "DAWN": {
        "names": {
            "KO": "던",
            "EN": "DAWN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCLDLJuFIOQZixN8jtEI8X5w",
            "instagram": "https://instagram.com/hyojong_1994/",
            "spotify": "https://open.spotify.com/artist/7DxCK6bwfQC3F2ajZ02R2F",
            "tiktok": "https://www.tiktok.com/@dawn.official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200205/20020589.jpg"
    },
    "DAYBREAK": {
        "names": {
            "KO": "데이브레이크",
            "EN": "DAYBREAK"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCcQkTEhyjjD60DJey-gGTAQ",
            "instagram": "https://www.instagram.com/band_daybreak/",
            "spotify": "https://open.spotify.com/artist/1uMhweBMKu7nA1IgFc0yN2"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800270/80027063.jpg"
    },
    "DAY6": {
        "names": {
            "KO": "데이식스",
            "EN": "DAY6"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCp-pqXsizklX3ZHvLxXyhxw",
            "twitter": "https://twitter.com/DAY6Official",
            "instagram": "https://www.instagram.com/day6kilogram/",
            "spotify": "https://open.spotify.com/artist/5TnQc2N1iKlFjYD7CPGvFc",
            "tiktok": "https://www.tiktok.com/@day6_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802457/80245739.jpg"
    },
    "Dok2": {
        "names": {
            "KO": "도끼",
            "EN": "Dok2"
        },
        "sns": {
            "twitter": "https://twitter.com/notoriousgonzo",
            "spotify": "https://open.spotify.com/artist/0rW6fVd3yuW2CF2sLYWQtE"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800133/80013381.jpg"
    },
    "DoHanSe": {
        "names": {
            "KO": "도한세",
            "EN": "Do Han Se"
        },
        "sns": {
            "instagram": "https://www.instagram.com/dxhxnxe/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802714/80271484.jpg"
    },
    "TVXQ": {
        "names": {
            "KO": "동방신기",
            "EN": "TVXQ!"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC6dXhxQtzjlEGauwEGtLuSw",
            "instagram": "https://www.instagram.com/tvxq.official/",
            "twitter": "https://twitter.com/TVXQ",
            "spotify": "https://open.spotify.com/artist/6nVMMEywS5Y4tsHPKx1nIo",
            "tiktok": "https://www.tiktok.com/@tvxq_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/648/64843.jpg"
    },
    "DKZ": {
        "names": {
            "KO": "동키즈",
            "EN": "DKZ"
        },
        "sns": {
            "twitter": "https://twitter.com/dkz_dy",
            "instagram": "https://www.instagram.com/dkz_dy/",
            "spotify": "https://open.spotify.com/artist/31eyTcfjAke5hFX3az3nRE",
            "tiktok": "https://www.tiktok.com/@dkz_dy"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803228/80322851.jpg?version=239089&d=20220411151836?version=undefined"
    },
    "DRIPPIN": {
        "names": {
            "KO": "드리핀",
            "EN": "DRIPPIN"
        },
        "sns": {
            "twitter": "https://twitter.com/drippin",
            "instagram": "https://www.instagram.com/wearedrippin/",
            "spotify": "https://open.spotify.com/artist/5IVacR5tKgTu9HotcG8kkl",
            "tiktok": "https://www.tiktok.com/@wearedrippin"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201156/20115636.jpg"
    },
    "DreamNote": {
        "names": {
            "KO": "드림노트",
            "EN": "DreamNote"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ime_dreamnote/",
            "twitter": "https://www.twitter.com/iMe_Dreamnote",
            "fancafe": "http://cafe.daum.net/ime-dreamnote",
            "spotify": "https://open.spotify.com/artist/3ILvL0HM0cST4iR8RzQh2V",
            "tiktok": "https://www.tiktok.com/@dreamnote_imekorea"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200688/20068830.jpg"
    },
    "Dreamcatcher": {
        "names": {
            "KO": "드림캐쳐",
            "EN": "Dreamcatcher"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCijULR2sXLutCRBtW3_WEfA",
            "instagram": "https://www.instagram.com/hf_dreamcatcher/",
            "twitter": "https://twitter.com/hf_dreamcatcher",
            "fancafe": "http://cafe.daum.net/Dreamcatcher7",
            "spotify": "https://open.spotify.com/artist/5V1qsQHdXNm4ZEZHWvFnqQ",
            "tiktok": "https://www.tiktok.com/@official_dreamcatcher"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802762/80276288.jpg"
    },
    "the8": {
        "names": {
            "KO": "디에잇",
            "EN": "The8"
        },
        "sns": {
            "instagram": "https://www.instagram.com/xuminghao_o/",
            "spotify": "https://open.spotify.com/artist/4DqFd6XE3dX4LWXHJVVpLk"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802322/80232295.jpg"
    },
    "DO": {
        "names": {
            "KO": "디오",
            "EN": "D.O."
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/2CQZr2RPZmrcvDnaod1ldC"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802033/80203317.jpg"
    },
    "D1CE": {
        "names": {
            "KO": "디원스",
            "EN": "D1CE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-oSDMufaaGNeQbNoLMU1ZQ",
            "instagram": "https://www.instagram.com/officiald1ce/",
            "twitter": "https://twitter.com/officialD1CE/",
            "fancafe": "http://cafe.daum.net/D1CE",
            "spotify": "https://open.spotify.com/artist/2ZswunnvJDYX8GUrzAMG6l",
            "tiktok": "https://www.tiktok.com/@official_d1ce"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803314/80331433.jpg"
    },
    "D-CRUNCH": {
        "names": {
            "KO": "디크런치",
            "EN": "D-CRUNCH"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCCyCvwz4NSX1wfUYoYnLU_Q",
            "instagram": "https://www.instagram.com/d_crunch_official/",
            "twitter": "https://twitter.com/DIA_CRUNCH",
            "fancafe": "http://cafe.daum.net/D-CRUNCH",
            "spotify": "https://open.spotify.com/artist/1CNEzaJTiE6s43DHohcujW",
            "tiktok": "https://www.tiktok.com/@dcrunch_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200623/20062325.jpg"
    },
    "DPRLIVE": {
        "names": {
            "KO": "디피알 라이브",
            "EN": "DPR LIVE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCtG5oKSlksz-QmD_2uI4WBw",
            "instagram": "https://www.instagram.com/dprlive/",
            "twitter": "https://twitter.com/_dprlive",
            "spotify": "https://open.spotify.com/artist/0siBQaURCli5wn2lqv8WZg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200341/20034170.jpg"
    },
    "DPRIAN": {
        "names": {
            "KO": "디피알 이안",
            "EN": "DPR IAN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/dprian/",
            "twitter": "https://twitter.com/DPRIAN_",
            "spotify": "https://open.spotify.com/artist/2o8gT0fQmFxGNbowbdgeZe"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/119895/11989500.jpg"
    },
    "DEAN": {
        "names": {
            "KO": "딘",
            "EN": "DEAN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnCEKlzi52Yzj2JdBFhKVEA",
            "instagram": "https://www.instagram.com/deantrbl/",
            "twitter": "https://twitter.com/deantheofficial",
            "fancafe": "http://cafe.daum.net/DEANTRBL",
            "spotify": "https://open.spotify.com/artist/3eCd0TZrBPm2n9cDG6yWfF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802413/80241323.jpg"
    },
    "DinDin": {
        "names": {
            "KO": "딘딘",
            "EN": "DINDIN"
        },
        "sns": {
            "twitter": "https://twitter.com/dindinem",
            "instagram": "https://www.instagram.com/dindinem/",
            "spotify": "https://open.spotify.com/artist/63cvWayCvPbWYNDi537w0z"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801645/80164544.jpg"
    },
    "Deepflow": {
        "names": {
            "KO": "딥플로우",
            "EN": "Deepflow"
        },
        "sns": {
            "instagram": "https://www.instagram.com/deepflow39/",
            "spotify": "https://open.spotify.com/artist/4E7PyG6Vo26X1I9qURf45z"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800092/80009274.jpg"
    },
    "LABOUM": {
        "names": {
            "KO": "라붐",
            "EN": "LABOUM"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCB4HIC-s6wpVvT8o1D1n7aQ",
            "instagram": "https://www.instagram.com/officiallaboum/",
            "twitter": "https://twitter.com/officialLABOUM",
            "fancafe": "http://cafe.daum.net/officialLABOUM",
            "spotify": "https://open.spotify.com/artist/4iO5uKMUphLqQ20TfrdZx3",
            "tiktok": "https://www.tiktok.com/@officiallaboum"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802020/80202032.jpg"
    },
    "RAVI": {
        "names": {
            "KO": "라비",
            "EN": "RAVI"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ravithecrackkidz/",
            "spotify": "https://open.spotify.com/artist/42xj5mBLvrFdW6tYns6mxs",
            "tiktok": "https://www.tiktok.com/@ravithecrackkidz"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801278/80127898.jpg"
    },
    "LAIKUANLIN": {
        "names": {
            "KO": "라이관린",
            "EN": "LAI KUANLIN"
        },
        "sns": {
            "twitter": "https://twitter.com/LAI_KUANLIN_twt",
            "instagram": "https://www.instagram.com/official_lai_kuanlin/",
            "fancafe": "http://cafe.daum.net/cube-laikuanlin",
            "spotify": "https://open.spotify.com/artist/5CdOd1humriaRoTPPp2K9B"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288429.jpg"
    },
    "LIGHTSUM": {
        "names": {
            "KO": "라잇썸",
            "EN": "LIGHTSUM"
        },
        "sns": {
            "twitter": "https://twitter.com/CUBE_LIGHTSUM",
            "instagram": "https://www.instagram.com/cube_lightsum/",
            "spotify": "https://open.spotify.com/artist/57HNdw2ObRmfwWHG8Xhs8t"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201356/20135675.jpg"
    },
    "ROCKY": {
        "names": {
            "KO": "라키",
            "EN": "ROCKY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/p_rocky/",
            "spotify": "https://open.spotify.com/artist/4EqyJYhsMeyzJLdQNlRMef"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802570/80257091.jpg"
    },
    "Lapillus": {
        "names": {
            "KO": "라필루스",
            "EN": "Lapillus"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCDi_DeMQ2EM2UbjCM62awcw",
            "instagram": "https://www.instagram.com/official.lapillus/",
            "twitter": "https://twitter.com/Lapillus_twt",
            "fancafe": "https://cafe.daum.net/Lapillus",
            "spotify": "https://open.spotify.com/artist/7bcMJG1TkYFFD9Fit3STLJ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803720/80372064.jpg"
    },
    "Lovelyz": {
        "names": {
            "KO": "러블리즈",
            "EN": "Lovelyz"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCtF9Njo6rLI8U2ZrJ_cFzHQ",
            "instagram": "https://www.instagram.com/official_lvlz8_/",
            "twitter": "https://twitter.com/Official_LVLZ/",
            "fancafe": "http://cafe.daum.net/wlgirls",
            "spotify": "https://open.spotify.com/artist/3g34PW5oNmDBxMVUTzx2XK",
            "tiktok": "https://www.tiktok.com/@lovelyz_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802095/80209592.jpg"
    },
    "RedVelvet": {
        "names": {
            "KO": "레드벨벳",
            "EN": "Red Velvet"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCk9GmdlDTBfgGRb7vXeRMoQ",
            "instagram": "https://www.instagram.com/redvelvet.smtown/",
            "twitter": "https://twitter.com/RVsmtown",
            "spotify": "https://open.spotify.com/artist/1z4g3DjTBBZKhvAroFlhOM",
            "tiktok": "https://www.tiktok.com/@redvelvet_smtown"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801994/80199440.jpg"
    },
    "REDSQUARE": {
        "names": {
            "KO": "레드스퀘어",
            "EN": "REDSQUARE "
        },
        "sns": {
            "instagram": "https://www.instagram.com/redsquare.official/",
            "spotify": "https://open.spotify.com/artist/4BupBPl0N4XHMCteQoRJFb"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201080/20108068.jpg"
    },
    "Reddy": {
        "names": {
            "KO": "레디",
            "EN": "Reddy"
        },
        "sns": {
            "twitter": "https://twitter.com/kimhongwu",
            "instagram": "https://www.instagram.com/keemhongwu/",
            "spotify": "https://open.spotify.com/artist/69H1Ooj2eBJXLTk3IEBV0v",
            "tiktok": "https://www.tiktok.com/@keemhongwu"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801098/80109857.jpg"
    },
    "LEO": {
        "names": {
            "KO": "레오",
            "EN": "LEO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/leo_jungtw/",
            "twitter": "https://twitter.com/JUNGTW_LEO",
            "spotify": "https://open.spotify.com/artist/0KZZD2YdkvaIsGpMEVVKVD"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801279/80127901.jpg"
    },
    "LAY": {
        "names": {
            "KO": "레이",
            "EN": "LAY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCROoY31pgrU66oSzkYdWWmw",
            "instagram": "https://www.instagram.com/layzhang/",
            "twitter": "https://twitter.com/layzhang",
            "spotify": "https://open.spotify.com/artist/4o7tWrzQOqarDtTMWD2HV9"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801440/80144097.jpg"
    },
    "Raina": {
        "names": {
            "KO": "레이나",
            "EN": "Raina"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC5cVWAEzenhFyup2kRcouhQ",
            "instagram": "https://www.instagram.com/raina_57/",
            "spotify": "https://open.spotify.com/artist/2lkUAt5tu0ucVOMFT9hYtg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800615/80061534.jpg"
    },
    "LADIESCODE": {
        "names": {
            "KO": "레이디스 코드",
            "EN": "LADIES CODE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-MlYzrnfAkW3YYqEg3j_5g",
            "instagram": "https://www.instagram.com/ladiescode_official/",
            "twitter": "https://twitter.com/polaris_lc",
            "fancafe": "http://cafe.daum.net/ladiescode",
            "spotify": "https://open.spotify.com/artist/4epPY1AW9lQeVUM1XaFiwi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801488/80148864.jpg"
    },
    "RYEOWOOK": {
        "names": {
            "KO": "려욱",
            "EN": "RYEOWOOK"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC78EgjVM1G7HucXypfB94Fw",
            "twitter": "https://twitter.com/ryeong9",
            "spotify": "https://open.spotify.com/artist/0fwfMuz3AmWRy2pyM5fDRo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800135/80013544.jpg"
    },
    "Loco": {
        "names": {
            "KO": "로꼬",
            "EN": "Loco"
        },
        "sns": {
            "instagram": "https://www.instagram.com/satgotloco/",
            "twitter": "https://twitter.com/satgotloco",
            "spotify": "https://open.spotify.com/artist/2e4G04F77jxVuDYo44TCSm",
            "tiktok": "https://www.tiktok.com/@satgotloco"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801320/80132051.jpg"
    },
    "Rothy": {
        "names": {
            "KO": "로시",
            "EN": "Rothy"
        },
        "sns": {
            "twitter": "https://twitter.com/Rothy_official",
            "instagram": "https://www.instagram.com/rothy_ming/",
            "fancafe": "http://cafe.daum.net/rothy.official",
            "spotify": "https://open.spotify.com/artist/0jUn8CXobOt0IixyR72una"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200464/20046439.jpg"
    },
    "RoyKim": {
        "names": {
            "KO": "로이킴",
            "EN": "Roy Kim"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCn9sWzxAa7HXCNw_7xAfE_Q",
            "instagram": "https://www.instagram.com/roykimmusic/",
            "twitter": "https://twitter.com/official_roykim",
            "spotify": "https://open.spotify.com/artist/3ErHVJMsxTq2lLSmnONBm9"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801377/80137715.jpg"
    },
    "ROSE": {
        "names": {
            "KO": "로제",
            "EN": "ROSÉ"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCBo1hnzxV9rz3WVsv__Rn1g",
            "instagram": "https://www.instagram.com/roses_are_rosie/",
            "spotify": "https://open.spotify.com/artist/3eVa5w3URK5duf6eyVDbu9",
            "tiktok": "https://www.tiktok.com/@roses_are_rosie"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802656/80265679.jpg"
    },
    "RocketPunch": {
        "names": {
            "KO": "로켓펀치",
            "EN": "Rocket Punch"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCDbLcCDRjmKrNtuq6O62lng",
            "instagram": "https://www.instagram.com/official_rcpc_/",
            "twitter": "https://twitter.com/RocketPunch",
            "spotify": "https://open.spotify.com/artist/4hozqATxbpy9TwKWRT8QVO",
            "tiktok": "https://www.tiktok.com/@official_rocketpunch"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200885/20088588.jpg"
    },
    "LUNA": {
        "names": {
            "KO": "루나",
            "EN": "LUNA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC06v2Mqte9cfn-3SMwpvFUA",
            "spotify": "https://open.spotify.com/artist/56HZvtrzD82YKMGGJTlIG2",
            "tiktok": "https://www.tiktok.com/@luna.812"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800607/80060788.jpg"
    },
    "LUNARSOLAR": {
        "names": {
            "KO": "루나솔라",
            "EN": "LUNARSOLAR"
        },
        "sns": {
            "instagram": "https://www.instagram.com/lunarsolar.official/",
            "twitter": "https://twitter.com/lunarsolar_",
            "fancafe": "http://cafe.daum.net/LUNARSOLAR",
            "spotify": "https://open.spotify.com/artist/64XtE3KrOhSYaS3dX04kI1",
            "tiktok": "https://www.tiktok.com/@lunarsolar.official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803449/80344935.jpg"
    },
    "LUMINOUS": {
        "names": {
            "KO": "루미너스",
            "EN": "LUMINOUS"
        },
        "sns": {
            "instagram": "https://www.instagram.com/lmn5_official/",
            "twitter": "https://twitter.com/LMN5_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/122960/12296006.jpg"
    },
    "LUCY": {
        "names": {
            "KO": "루시",
            "EN": "LUCY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnXwXrQ8KIBoV8k1T3xGznw",
            "twitter": "https://twitter.com/BANDLUCY_mystic",
            "instagram": "https://www.instagram.com/band_lucy/",
            "fancafe": "http://cafe.daum.net/band.lucy",
            "spotify": "https://open.spotify.com/artist/4eh2JeBpQaScfHKKXZh5vO",
            "tiktok": "https://www.tiktok.com/@bandlucy_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803322/80332208.jpg"
    },
    "LucidFall": {
        "names": {
            "KO": "루시드폴",
            "EN": "Lucid Fall"
        },
        "sns": {
            "twitter": "https://twitter.com/lucid_fall_jo",
            "instagram": "https://www.instagram.com/institute.for.silence/",
            "spotify": "https://open.spotify.com/artist/4uKVLCvDKjjNM58cXtKitT"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/4/419.jpg"
    },
    "RYUSUJEONG": {
        "names": {
            "KO": "류수정",
            "EN": "RYU SU-JEONG"
        },
        "sns": {
            "instagram": "https://www.instagram.com/iloveryu._/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802096/80209607.jpg"
    },
    "LESSERAFIM": {
        "names": {
            "KO": "르세라핌",
            "EN": "LE SSERAFIM"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCs-QBT4qkj_YiQw1ZntDO3g",
            "twitter": "https://twitter.com/le_sserafim",
            "instagram": "https://www.instagram.com/le_sserafim/",
            "spotify": "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201589/20158908.jpg"
    },
    "LISA": {
        "names": {
            "KO": "리사",
            "EN": "LISA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC35HKvKYPkri4Grd5KXl3wQ",
            "instagram": "https://www.instagram.com/lalalalisa_m/",
            "spotify": "https://open.spotify.com/artist/5L1lO4eRHmJ7a0Q6csE5cT"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802656/80265680.jpg"
    },
    "Leessang": {
        "names": {
            "KO": "리쌍",
            "EN": "Leessang"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/0JGN9XIqm3vfg7hhPHjExI"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/302/30292.jpg"
    },
    "LYn": {
        "names": {
            "KO": "린",
            "EN": "Lyn"
        },
        "sns": {
            "instagram": "https://www.instagram.com/lovelyn_i/",
            "spotify": "https://open.spotify.com/artist/1A6WCseWiK22oxqodg7vcy"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/321/32151.jpg"
    },
    "Leellamarz": {
        "names": {
            "KO": "릴러말즈",
            "EN": "Leellamarz"
        },
        "sns": {
            "instagram": "https://www.instagram.com/leellamarz/",
            "spotify": "https://open.spotify.com/artist/79g2STpP2iV1xfgHuhrhX0"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200407/20040756.jpg"
    },
    "MAMAMOO": {
        "names": {
            "KO": "마마무",
            "EN": "MAMAMOO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCuhAUMLzJxlP1W7mEk0_6lA",
            "instagram": "https://www.instagram.com/mamamoo_official/",
            "twitter": "https://twitter.com/RBW_MAMAMOO",
            "fancafe": "http://cafe.daum.net/mamamoo",
            "spotify": "https://open.spotify.com/artist/0XATRDCYuuGhk0oE7C0o5G",
            "tiktok": "https://www.tiktok.com/@official_mamamoo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801778/80177857.jpg"
    },
    "MAMAMOOPlus": {
        "names": {
            "KO": "마마무+",
            "EN": "MAMAMOO+"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC69BwS3bTHSVsv8mrg0muqw",
            "spotify": "https://open.spotify.com/artist/2uGx10VkBrI3GBvnQl81du"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201670/20167049.jpg"
    },
    "MYNAME": {
        "names": {
            "KO": "마이네임",
            "EN": "MYNAME"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCSsf5Lzhr0_HKbYkJS-q1nA",
            "twitter": "https://twitter.com/myname_2011",
            "fancafe": "http://cafe.daum.net/myname2011",
            "spotify": "https://open.spotify.com/artist/1Q8ON7PhIGhFtgbfzx13CK"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801123/80112319.jpg"
    },
    "MYTEEN": {
        "names": {
            "KO": "마이틴",
            "EN": "MYTEEN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCn-lpjIudxfCaWkPPC4Fang",
            "twitter": "https://twitter.com/myteen_official",
            "fancafe": "http://cafe.daum.net/officialmyteen",
            "spotify": "https://open.spotify.com/artist/0Jy5VMwm7X25fOaYh0PyXK"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802880/80288017.jpg"
    },
    "Mark": {
        "names": {
            "KO": "마크",
            "EN": "Mark"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-59s1w6gpuuv8Eu_kBb54A",
            "instagram": "https://www.instagram.com/marktuan/",
            "twitter": "https://twitter.com/MarkTuan",
            "spotify": "https://open.spotify.com/artist/4l1q0z9xeJcJw73Gxc6gCB"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801783/80178392.jpg"
    },
    "MAKTUB": {
        "names": {
            "KO": "마크툽",
            "EN": "MAKTUB"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCFHP2lLTQmgVtBiFQlzYauQ",
            "instagram": "https://www.instagram.com/maktub_world/",
            "spotify": "https://open.spotify.com/artist/0frNU3rG4ltOP4GNBA1g4j"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801094/80109484.jpg"
    },
    "MadClown": {
        "names": {
            "KO": "매드클라운",
            "EN": "Mad Clown"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/0dX6tgZKWpamoFHFuXFhwd",
            "tiktok": "https://www.tiktok.com/@madclown_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800154/80015461.jpg"
    },
    "MondayKiz": {
        "names": {
            "KO": "먼데이 키즈",
            "EN": "Monday Kiz"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCxPnE6w_xDKKABa5PqvPRoQ",
            "instagram": "https://www.instagram.com/mondaykiz.official/",
            "twitter": "https://twitter.com/mondaykiz_offic",
            "fancafe": "http://cafe.daum.net/lovesong707",
            "spotify": "https://open.spotify.com/artist/24jJXZRz3aGvjVvZ4OoerD"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800135/80013501.jpg"
    },
    "GreatGuys": {
        "names": {
            "KO": "멋진녀석들",
            "EN": "GreatGuys"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCYzXa0_YsM9gEHkAKXBXbvA",
            "instagram": "https://www.instagram.com/greatguys_official/",
            "twitter": "https://twitter.com/greatguys_twt",
            "fancafe": "http://cafe.daum.net/GreatGuysOfficial",
            "spotify": "https://open.spotify.com/artist/5rl5eIP9MogVsjbIVUKK1y"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200429/20042976.jpg"
    },
    "Melomance": {
        "names": {
            "KO": "멜로망스",
            "EN": "Melomance"
        },
        "sns": {
            "instagram": "https://www.instagram.com/melomance_official/",
            "spotify": "https://open.spotify.com/artist/6k4r73Wq8nhkCDoUsECL1e"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802230/80223033.jpg"
    },
    "MOMOLAND": {
        "names": {
            "KO": "모모랜드",
            "EN": "MOMOLAND"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCfWtQwSgfy3tm0zUt-PWG-g",
            "instagram": "https://www.instagram.com/momoland_official/",
            "twitter": "https://twitter.com/MMLD_Official",
            "fancafe": "http://cafe.daum.net/MOMOLAND",
            "spotify": "https://open.spotify.com/artist/5RR0MLwcjc87wjSw2JYdwx",
            "tiktok": "https://www.tiktok.com/@momoland_161110"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802712/80271242.jpg"
    },
    "MONSTAX": {
        "names": {
            "KO": "몬스타엑스",
            "EN": "MONSTA X"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCZvCP6sWj75MwpUP4LVtpNw",
            "instagram": "https://www.instagram.com/official_monsta_x/",
            "twitter": "https://twitter.com/OfficialMonstaX",
            "fancafe": "http://cafe.daum.net/monsta-x",
            "spotify": "https://open.spotify.com/artist/4TnGh5PKbSjpYqpIdlW5nz",
            "tiktok": "https://www.tiktok.com/@monsta_x_514"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802291/80229195.jpg"
    },
    "MOONBYUL": {
        "names": {
            "KO": "문별",
            "EN": "MOONBYUL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCFrAB5I66LgzOi15TF4PO6A",
            "instagram": "https://www.instagram.com/mo_onbyul/",
            "spotify": "https://open.spotify.com/artist/1eTft3tXynrKdo6XD7QHLL",
            "tiktok": "https://www.tiktok.com/@moonbyul_2da"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801778/80177859.jpg"
    },
    "MoonJongUp": {
        "names": {
            "KO": "문종업",
            "EN": " MoonJongUp"
        },
        "sns": {
            "instagram": "https://www.instagram.com/moonjongyeup/",
            "twitter": "https://twitter.com/jongup_official",
            "fancafe": "http://cafe.daum.net/moonjongyeup",
            "tiktok": "https://www.tiktok.com/@moonjongup"
        },
        "imgUrl": ""
    },
    "MIRAE": {
        "names": {
            "KO": "미래소년",
            "EN": "MIRAE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/official__mirae/",
            "twitter": "https://twitter.com/official_MIRAE",
            "fancafe": "https://cafe.daum.net/officialMIRAE",
            "spotify": "https://open.spotify.com/artist/3cI5n4TdsnqzKxYPkQLs4b",
            "tiktok": "https://www.tiktok.com/@official_mirae"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201260/20126072.jpg"
    },
    "MIRYO": {
        "names": {
            "KO": "미료",
            "EN": "MIRYO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UClmcETd3c872BSbH9KVSwwA",
            "twitter": "https://twitter.com/MIRYOakaJOHONEY",
            "instagram": "https://www.instagram.com/miryoakajohoney/",
            "spotify": "https://open.spotify.com/artist/6wJGHv6dfPrZxFoZXXwtLO"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800596/80059600.jpg"
    },
    "MISSA": {
        "names": {
            "KO": "미쓰에이",
            "EN": "MISS A"
        },
        "sns": {
            "twitter": "https://twitter.com/JYPEmissA",
            "spotify": "https://open.spotify.com/artist/1BEohdSWSBggmO979tzRwW"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800730/80073013.jpg"
    },
    "MIYEON": {
        "names": {
            "KO": "미연",
            "EN": "MIYEON"
        },
        "sns": {
            "instagram": "https://www.instagram.com/noodle.zip/",
            "spotify": "https://open.spotify.com/artist/779v40cWIJUUoIDtC1IGaF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803073/80307306.jpg"
    },
    "Miyu": {
        "names": {
            "KO": "미유",
            "EN": "Miyu"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8RJBf7ftto2R1EKZC3YE0A",
            "twitter": "https://twitter.com/take_miyu112",
            "instagram": "https://www.instagram.com/miyusanno.official/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803351/80335109.jpg"
    },
    "MinKyunghun": {
        "names": {
            "KO": "민경훈",
            "EN": "Min Kyung hun"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCVe7Bx33A5xmUCYz78YV6sQ",
            "fancafe": "http://cafe.daum.net/buzzvoice",
            "spotify": "https://open.spotify.com/artist/7uv6GgFILw5jZxPnsGzER3"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80085/8008570.jpg"
    },
    "MINNIE": {
        "names": {
            "KO": "민니",
            "EN": "MINNIE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/min.nicha/",
            "spotify": "https://open.spotify.com/artist/2pHkxVNynHBwQHhGaoBIXX"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803073/80307310.jpg"
    },
    "MINSEO": {
        "names": {
            "KO": "민서",
            "EN": "MINSEO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/minse0_96/",
            "spotify": "https://open.spotify.com/artist/3qo507hAo0pjRj42AmioUv",
            "tiktok": "https://www.tiktok.com/@minse0_960409"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200011/20001178.jpg"
    },
    "MINHYUN": {
        "names": {
            "KO": "민현",
            "EN": "MINHYUN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/optimushwang/",
            "twitter": "https://twitter.com/MINHYUN_PLEDIS",
            "spotify": "https://open.spotify.com/artist/3jo2zJLmaZLq9xn2Bpj5QA"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288437.jpg"
    },
    "BADA": {
        "names": {
            "KO": "바다",
            "EN": "BADA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC0D7tPBhxeFxNDUrrT4JBcw",
            "instagram": "https://www.instagram.com/bada0228/",
            "twitter": "https://twitter.com/bada0228",
            "spotify": "https://open.spotify.com/artist/18IwGkcIzn689YpIkzEKZj"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/18/1801.jpg"
    },
    "BOBBY": {
        "names": {
            "KO": "바비",
            "EN": "BOBBY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/bobbyindaeyo/",
            "twitter": "https://twitter.com/bobbyranika",
            "spotify": "https://open.spotify.com/artist/7ieMQQDR0bdBPz572mtxwS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802011/80201170.jpg"
    },
    "Vibe": {
        "names": {
            "KO": "바이브",
            "EN": "Vibe"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/68ym0sOo7MazZxScbm1wtI"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/132/13277.jpg"
    },
    "KyungPark": {
        "names": {
            "KO": "박경",
            "EN": "Kyung Park"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCMeOXXMDBIsFwSzZ5WvYk0A",
            "instagram": "https://www.instagram.com/qkrrud78/",
            "twitter": "https://twitter.com/KYUNGPARK1992",
            "spotify": "https://open.spotify.com/artist/0hT0UrjmzkLJouAT52ck6j"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800979/80097986.jpg"
    },
    "ParkBoRam": {
        "names": {
            "KO": "박보람",
            "EN": "Park BoRam"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ramramram2/",
            "twitter": "https://twitter.com/parkboram0813",
            "spotify": "https://open.spotify.com/artist/6tvrEIVX5eKJlipdzt11wi",
            "tiktok": "https://www.tiktok.com/@ramramrame"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800793/80079369.jpg"
    },
    "ParkBom": {
        "names": {
            "KO": "박봄",
            "EN": "Park Bom"
        },
        "sns": {
            "twitter": "https://twitter.com/haroobomkum",
            "instagram": "https://www.instagram.com/newharoobompark/",
            "spotify": "https://open.spotify.com/artist/3uHb6dRazmcaT15bMexUtt",
            "tiktok": "https://www.tiktok.com/@officialparkbom"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800238/80023800.jpg"
    },
    "ParkSaebyul": {
        "names": {
            "KO": "박새별",
            "EN": "Park Saebyul"
        },
        "sns": {
            "instagram": "https://www.instagram.com/sae_byul_park/",
            "twitter": "https://twitter.com/saebyul_park"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800495/80049502.jpg"
    },
    "PARKWON": {
        "names": {
            "KO": "박원",
            "EN": "PARK WON"
        },
        "sns": {
            "twitter": "https://twitter.com/ParkWonOfficial",
            "spotify": "https://open.spotify.com/artist/1XujSdsxykPhP3dn6HaT4l"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800692/80069220.jpg"
    },
    "JayPark": {
        "names": {
            "KO": "박재범",
            "EN": "Jay Park"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCK5fO9Q2gitao0M5yQvPnvw",
            "twitter": "https://twitter.com/jaybumaom",
            "instagram": "https://www.instagram.com/moresojuplease/",
            "spotify": "https://open.spotify.com/artist/4XDi67ZENZcbfKnvMnTYsI",
            "tiktok": "https://www.tiktok.com/@jayparkisoverparty"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800482/80048278.jpg"
    },
    "JaeJungParc": {
        "names": {
            "KO": "박재정",
            "EN": "Jae Jung Parc"
        },
        "sns": {
            "twitter": "https://twitter.com/parcjaejung",
            "instagram": "https://www.instagram.com/parcjaejung/",
            "spotify": "https://open.spotify.com/artist/7kXQtwn3ZRTBc8JYNyGwQy"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801692/80169222.jpg"
    },
    "LenaPark": {
        "names": {
            "KO": "박정현",
            "EN": "Lena Park"
        },
        "sns": {
            "twitter": "https://twitter.com/L_Space76",
            "spotify": "https://open.spotify.com/artist/7MNyflLAWpaH0EPw1fdORD"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/316/31663.jpg"
    },
    "parkjiyoon": {
        "names": {
            "KO": "박지윤",
            "EN": "parkjiyoon"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCo5N9R8-srgbz2z1SI_ro9g",
            "instagram": "https://www.instagram.com/parkjiyoon_creative/",
            "twitter": "https://twitter.com/parkjiyoon_kr",
            "spotify": "https://open.spotify.com/artist/2NVYd7nCno3gh2Bz9pWtfi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/48/4867.jpg"
    },
    "PARKJIHOON": {
        "names": {
            "KO": "박지훈",
            "EN": "PARK JI HOON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCzlpmIJE0yzuc1f4EFQYRJQ",
            "instagram": "https://www.instagram.com/0529.jihoon.ig/",
            "twitter": "https://twitter.com/Park_Jihoon_twt",
            "fancafe": "http://cafe.daum.net/park-jihoon",
            "spotify": "https://open.spotify.com/artist/0tBYMeHDDJCzRuREuCTWi7",
            "tiktok": "https://www.tiktok.com/@0529.jihoon"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288423.jpg"
    },
    "J.Y.Park": {
        "names": {
            "KO": "박진영",
            "EN": "J.Y. Park"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCJzd6hPg7Iz35SkBNzAjjWQ",
            "instagram": "https://www.instagram.com/asiansoul_jyp/",
            "twitter": "https://twitter.com/followjyp",
            "spotify": "https://open.spotify.com/artist/1TTx0YcbKUtJIZY1HEnh9B",
            "tiktok": "https://www.tiktok.com/@jypark_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/152/15252.jpg"
    },
    "ParkHyoShin": {
        "names": {
            "KO": "박효신",
            "EN": "Park Hyo Shin"
        },
        "sns": {
            "instagram": "https://www.instagram.com/parkhyoshin.official/",
            "twitter": "https://twitter.com/realcaptainpark",
            "spotify": "https://open.spotify.com/artist/57htMBtzpppc1yoXgjbslj"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/18/1876.jpg"
    },
    "BANGYONGGUK": {
        "names": {
            "KO": "방용국",
            "EN": "BANG YONGGUK"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCdDdahLgzjnBe4CebA44p-Q",
            "twitter": "https://twitter.com/BAP_Bangyongguk",
            "instagram": "https://www.instagram.com/bangstergram/",
            "spotify": "https://open.spotify.com/artist/6g6zaR4B3WDZXphDRmsVGF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800949/80094972.jpg"
    },
    "BTS": {
        "names": {
            "KO": "방탄소년단",
            "EN": "BTS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ",
            "instagram": "https://www.instagram.com/bts.bighitofficial/",
            "twitter": "https://twitter.com/BTS_twt",
            "fancafe": "http://cafe.daum.net/BANGTAN",
            "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
            "tiktok": "https://www.tiktok.com/@bts_official_bighit"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800793/80079394.jpg"
    },
    "BaekAYeon": {
        "names": {
            "KO": "백아연",
            "EN": "Baek A Yeon"
        },
        "sns": {
            "twitter": "https://twitter.com/100ayeon",
            "instagram": "https://www.instagram.com/ayeoniiiiii/",
            "spotify": "https://open.spotify.com/artist/5UKoKVlU7EDN4UgDuVRAbX"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801232/80123279.jpg"
    },
    "YERINBAEK": {
        "names": {
            "KO": "백예린",
            "EN": "YERIN BAEK"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yerin_the_genuine/",
            "fancafe": "http://cafe.daum.net/YerinBaek",
            "spotify": "https://open.spotify.com/artist/6dhfy4ByARPJdPtMyrUYJK",
            "tiktok": "https://www.tiktok.com/@yerinbaek_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801371/80137177.jpg"
    },
    "BaekZYoung": {
        "names": {
            "KO": "백지영",
            "EN": "Baek Z Young"
        },
        "sns": {
            "instagram": "https://www.instagram.com/baekzyoung/",
            "twitter": "https://twitter.com/jiyoungbaek",
            "spotify": "https://open.spotify.com/artist/3l0MJ9LCiBlMyOMaz485Q5"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/36/3669.jpg"
    },
    "100percent": {
        "names": {
            "ETC": "100%",
            "KO": "백퍼센트"
        },
        "sns": {
            "instagram": "https://www.instagram.com/100pergram/",
            "twitter": "https://twitter.com/TOP_100PERCENT",
            "fancafe": "http://cafe.daum.net/100PERCENT",
            "spotify": "https://open.spotify.com/artist/3fkFO5lmipe654caBLBD6n"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801360/80136020.jpg"
    },
    "BAEKHYUN": {
        "names": {
            "KO": "백현",
            "EN": "BAEKHYUN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCUyr5000laFgF79tWJB3rXQ",
            "instagram": "https://www.instagram.com/baekhyunee_exo/",
            "twitter": "https://twitter.com/B_hundred_Hyun",
            "spotify": "https://open.spotify.com/artist/4ufh0WuMZh6y4Dmdnklvdl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801202/80120269.jpg"
    },
    "BVNDIT": {
        "names": {
            "KO": "밴디트",
            "EN": "BVNDIT"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCNAIB6brZzCCe1QDXq0o7bQ",
            "twitter": "https://twitter.com/BVNDIT_official",
            "instagram": "https://www.instagram.com/bvndit_official/",
            "fancafe": "http://cafe.daum.net/MNH-BVNDIT",
            "spotify": "https://open.spotify.com/artist/5dEBuZjTtE68uDgCs23Kuv",
            "tiktok": "https://www.tiktok.com/@bvndit_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200807/20080755.jpg"
    },
    "BamBam": {
        "names": {
            "KO": "뱀뱀",
            "EN": "BamBam"
        },
        "sns": {
            "youtube": "https://youtube.com/channel/UCHOet1pAQ-jlhonoQGqBf5g",
            "instagram": "https://www.instagram.com/BamBam1A/",
            "twitter": "https://twitter.com/BamBam1A",
            "spotify": "https://open.spotify.com/artist/2p48L95TwEaYkSdn6R7LOr"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801783/80178396.jpg"
    },
    "VerbalJint": {
        "names": {
            "KO": "버벌진트",
            "EN": "Verbal Jint"
        },
        "sns": {
            "instagram": "https://www.instagram.com/freevjfreevj/",
            "twitter": "https://twitter.com/freevj",
            "spotify": "https://open.spotify.com/artist/24sQuJhQ85ZygDG7sUVUxR",
            "tiktok": "https://www.tiktok.com/@freevjfreevj"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/75/7573.jpg"
    },
    "Busters": {
        "names": {
            "KO": "버스터즈",
            "EN": "Busters"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCtcx-hTMn16oAlUMzIncb1g",
            "instagram": "https://www.instagram.com/busters_official/",
            "twitter": "https://www.twitter.com/Busters_idol",
            "fancafe": "http://cafe.daum.net/Busters"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200472/20047245.jpg"
    },
    "Buzz": {
        "names": {
            "KO": "버즈",
            "EN": "Buzz"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCfJUhjgK-m9iGiPwRJezM_Q",
            "spotify": "https://open.spotify.com/artist/4SdXXEHKFa5NSoh10QxeN2"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/568/56809.jpg"
    },
    "BUMZU": {
        "names": {
            "KO": "범주",
            "EN": "BUMZU"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC7VIUFvG3oLWtySQKA8-unw",
            "twitter": "https://twitter.com/nusoul91",
            "instagram": "https://www.instagram.com/bumzu91/",
            "spotify": "https://open.spotify.com/artist/4FCneqQd4xiPXKOa6poPIf"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801025/80102527.jpg"
    },
    "BUMKEY": {
        "names": {
            "KO": "범키",
            "EN": "BUMKEY"
        },
        "sns": {
            "twitter": "https://twitter.com/bumkey",
            "spotify": "https://open.spotify.com/artist/3vhZuZdMksbnJwoE3AwpXq",
            "tiktok": "https://www.tiktok.com/@bumkey_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800730/80073042.jpg"
    },
    "BerryGood": {
        "names": {
            "KO": "베리굿",
            "EN": "BerryGood"
        },
        "sns": {
            "instagram": "https://www.instagram.com/berrygood_official/",
            "twitter": "https://twitter.com/BerryGood2014",
            "spotify": "https://open.spotify.com/artist/2gW6OQobWMbkR1cKo72H2t"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801912/80191288.jpg"
    },
    "VERIVERY": {
        "names": {
            "KO": "베리베리",
            "EN": "VERIVERY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/the_verivery/",
            "twitter": "https://twitter.com/the_verivery",
            "fancafe": "http://cafe.daum.net/VERIVERY",
            "spotify": "https://open.spotify.com/artist/1fWUcRSok57yRm8gPKj1Fc",
            "tiktok": "https://www.tiktok.com/@the_verivery"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200661/20066107.jpg"
    },
    "Babylon": {
        "names": {
            "KO": "베이빌론",
            "EN": "Babylon"
        },
        "sns": {
            "instagram": "https://www.instagram.com/thebabylon/",
            "spotify": "https://open.spotify.com/artist/3P16F9giedxmc5238b66bo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802050/80205058.jpg"
    },
    "Ben": {
        "names": {
            "KO": "벤",
            "EN": "Ben"
        },
        "sns": {
            "instagram": "https://www.instagram.com/mignonben/",
            "twitter": "https://twitter.com/mignonben",
            "fancafe": "http://cafe.daum.net/bebemignon",
            "spotify": "https://open.spotify.com/artist/0bDdOBGVCFVt0f8N9ldW1k"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800938/80093826.jpg"
    },
    "BYUL": {
        "names": {
            "KO": "별",
            "EN": "BYUL"
        },
        "sns": {
            "twitter": "https://twitter.com/sweetstar0001",
            "instagram": "https://www.instagram.com/sweetstar0001/",
            "spotify": "https://open.spotify.com/artist/43ff51pvkYTDm9KtBaMApr"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/132/13244.jpg"
    },
    "Bonusbaby": {
        "names": {
            "KO": "보너스베이비",
            "EN": "Bonusbaby"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCQWTROGFzVaHDanfSk9TbCQ",
            "instagram": "https://www.instagram.com/bonusbaby_ig/",
            "twitter": "https://twitter.com/bonusbaby_twt",
            "fancafe": "http://cafe.daum.net/bonusbaby",
            "spotify": "https://open.spotify.com/artist/4ba2GLtsgJ8ix2089MG0j0"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802754/80275432.jpg"
    },
    "BoA": {
        "names": {
            "KO": "보아",
            "EN": "BoA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCYPtgd76D-o15reXD94BIoQ",
            "twitter": "https://twitter.com/BoAkwon",
            "instagram": "https://www.instagram.com/boakwon/",
            "spotify": "https://open.spotify.com/artist/4muJrGMndyYWqZtfk8OWy4",
            "tiktok": "https://www.tiktok.com/@boa_kwon"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/11/1168.jpg"
    },
    "BOYFRIEND": {
        "names": {
            "KO": "보이프렌드",
            "EN": "BOYFRIEND"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC19wksBRrmWKVhU_uapR_wQ",
            "instagram": "https://www.instagram.com/Boyfriend_6/",
            "twitter": "https://twitter.com/g_boyfriend",
            "fancafe": "http://cafe.daum.net/BOYFRIEND",
            "spotify": "https://open.spotify.com/artist/2Pw8E6zZoeuksVWtyZPnzd"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801009/80100971.jpg"
    },
    "BOL4": {
        "names": {
            "KO": "볼빨간사춘기",
            "EN": "BOL4"
        },
        "sns": {
            "instagram": "https://www.instagram.com/official_bol4/",
            "twitter": "https://twitter.com/BOL4_Official",
            "fancafe": "http://cafe.daum.net/Bolbbalgan4",
            "spotify": "https://open.spotify.com/artist/4k5fFEYgkWYrYvtOK3zVBl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802106/80210668.jpg"
    },
    "V": {
        "names": {
            "KO": "뷔",
            "EN": "V"
        },
        "sns": {
            "instagram": "https://www.instagram.com/thv/",
            "spotify": "https://open.spotify.com/artist/3JsHnjpbhX4SnySpvpa9DK"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801808/80180888.jpg"
    },
    "BrotherSu": {
        "names": {
            "KO": "브라더수",
            "EN": "BrotherSu"
        },
        "sns": {
            "instagram": "https://www.instagram.com/brothersu/",
            "twitter": "https://twitter.com/BrotherSu",
            "spotify": "https://open.spotify.com/artist/3fmAXFX05DFTaTkreemfxB"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800620/80062046.jpg"
    },
    "BrownEyedSoul": {
        "names": {
            "KO": "브라운 아이드 소울",
            "EN": "Brown Eyed Soul"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UClATH__FgfVBUtKvDvzLl-Q",
            "twitter": "https://twitter.com/brown_eyed_soul",
            "spotify": "https://open.spotify.com/artist/7AVa6rcpTQWVqgy91llPP5"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/555/55545.jpg"
    },
    "BrownEyedGirls": {
        "names": {
            "KO": "브라운아이드걸스",
            "EN": "Brown Eyed Girls"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCepFAcPmJZz46lJN5gdv1Cg",
            "twitter": "https://twitter.com/officialbeg",
            "instagram": "https://instagram.com/browneyedgirls_official/",
            "fancafe": "http://cafe.daum.net/Browneyedgirls",
            "spotify": "https://open.spotify.com/artist/2GEPtT5RDxrmdi0A4mbDi7"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800157/80015705.jpg"
    },
    "BraveGirls": {
        "names": {
            "KO": "브레이브걸스",
            "EN": "Brave Girls"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCx_kYu6Wp1yxZP_KtrW52EQ",
            "instagram": "https://www.instagram.com/bravegirls.official/",
            "twitter": "https://twitter.com/BraveGirls",
            "fancafe": "https://cafe.daum.net/BraveGirls0409",
            "spotify": "https://open.spotify.com/artist/7t5H3uQv0Zw6cQUnSTF5BB"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800973/80097357.jpg"
    },
    "Bryn": {
        "names": {
            "KO": "브린",
            "EN": "Bryn"
        },
        "sns": {
            "instagram": "https://www.instagram.com/brynbling/",
            "spotify": "https://open.spotify.com/artist/74r4YBm6qWOBKKF6MhVXVq"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200627/20062770.jpg"
    },
    "VAV": {
        "names": {
            "KO": "브이에이브이",
            "EN": "VAV"
        },
        "sns": {
            "twitter": "https://twitter.com/VAV_official",
            "instagram": "https://www.instagram.com/vav_official/",
            "fancafe": "http://cafe.daum.net/VAVofficial",
            "spotify": "https://open.spotify.com/artist/3riGN5iBVBk5naQxUDr5fk",
            "tiktok": "https://www.tiktok.com/@vav_official_kr"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802502/80250292.jpg"
    },
    "BlockB": {
        "names": {
            "KO": "블락비",
            "EN": "Block B"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC3EQ-_TqSIghbvv8Ck5BRzg",
            "instagram": "https://www.instagram.com/blockb_official_/",
            "twitter": "https://twitter.com/blockb_official",
            "fancafe": "http://cafe.daum.net/BB-Club",
            "spotify": "https://open.spotify.com/artist/4RnezwRV7VBJUCI1S0AE5u"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800972/80097235.jpg"
    },
    "BLACK6IX": {
        "names": {
            "KO": "블랙식스",
            "EN": "BLACK6IX"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC9WwOGE7ti1Riro2_4kVbew",
            "twitter": "https://twitter.com/black6ix_twt",
            "instagram": "https://www.instagram.com/black6ix_official/",
            "spotify": "https://open.spotify.com/artist/5W5dowztOO3kw9A5zpyjOO",
            "tiktok": "https://www.tiktok.com/@black6ix_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802804/80280496.jpg"
    },
    "BLACKPINK": {
        "names": {
            "KO": "블랙핑크",
            "EN": "BLACKPINK"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A",
            "instagram": "https://www.instagram.com/blackpinkofficial/",
            "twitter": "https://twitter.com/BLACKPINK",
            "fancafe": "http://cafe.daum.net/BLACKPINK1",
            "spotify": "https://open.spotify.com/artist/41MozSoPIsD1dJM0CLPjZF",
            "tiktok": "https://www.tiktok.com/@bp_tiktok"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200224/20022492.jpg"
    },
    "BLOO": {
        "names": {
            "KO": "블루",
            "EN": "BLOO"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/3ghCvruix2FYZ81DHRlOt1"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200192/20019269.jpg"
    },
    "BLITZERS": {
        "names": {
            "KO": "블리처스",
            "EN": "BLITZERS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC5aJQH0Q8HSOaCRXGy0YCwQ",
            "instagram": "https://www.instagram.com/official_blitzers/",
            "twitter": "https://twitter.com/wuzo_blitzers",
            "fancafe": "https://cafe.daum.net/Blitzers",
            "spotify": "https://open.spotify.com/artist/3Exoh42YMeqnUvYahAGgUE"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803539/80353904.jpg"
    },
    "Blingbling": {
        "names": {
            "KO": "블링블링",
            "EN": "BlingBling"
        },
        "sns": {
            "instagram": "https://www.instagram.com/blingbling_new/",
            "twitter": "https://twitter.com/blingbling_new",
            "fancafe": "http://cafe.daum.net/BlingBling.Official",
            "spotify": "https://open.spotify.com/artist/6xS3dyQKA8RajjorUSVrvi",
            "tiktok": "https://www.tiktok.com/@blingbling.official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201195/20119500.jpg"
    },
    "Rain": {
        "names": {
            "KO": "비",
            "EN": "RAIN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCxXgIeE5hxWxHG6dz9Scg2w",
            "instagram": "https://www.instagram.com/rain_oppa/",
            "twitter": "https://twitter.com/29rain",
            "spotify": "https://open.spotify.com/artist/5L4EafeXwZ0stGuPtGr5Tz",
            "tiktok": "https://www.tiktok.com/@rain.xix"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/206/20692.jpg"
    },
    "BDC": {
        "names": {
            "KO": "비디씨",
            "EN": "BDC"
        },
        "sns": {
            "twitter": "https://twitter.com/BDC_BNM",
            "instagram": "https://www.instagram.com/bdc.bnm/",
            "fancafe": "http://cafe.daum.net/BDC-OFFICIAL",
            "spotify": "https://open.spotify.com/artist/3FgebbL1Lp8wynkXgtscfd",
            "tiktok": "https://www.tiktok.com/@bdc.official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200938/20093841.jpg"
    },
    "BIBI": {
        "names": {
            "KO": "비비",
            "EN": "BIBI"
        },
        "sns": {
            "instagram": "https://www.instagram.com/nakedbibi/",
            "spotify": "https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9",
            "tiktok": "https://www.tiktok.com/@nakedbibi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200704/20070472.jpg"
    },
    "VIVIZ": {
        "names": {
            "KO": "비비지",
            "EN": "VIVIZ"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCWFMjDuWKlct0jy89k2kkRA",
            "twitter": "https://twitter.com/VIVIZ_official",
            "instagram": "https://www.instagram.com/viviz_official/",
            "fancafe": "https://cafe.daum.net/VIVIZ",
            "spotify": "https://open.spotify.com/artist/7Lq3yAtwi0Z7zpxEwbQQNZ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201536/20153689.jpg"
    },
    "BEAST": {
        "names": {
            "KO": "비스트",
            "EN": "BEAST"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCwpmEwAbLPUHH_9y8JazVnA",
            "fancafe": "http://cafe.daum.net/playb2st",
            "spotify": "https://open.spotify.com/artist/1Pr9gT0veB2tgcisQeIGoC"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800603/80060355.jpg"
    },
    "B.I": {
        "names": {
            "KO": "비아이",
            "EN": "B.I"
        },
        "sns": {
            "instagram": "https://www.instagram.com/shxxbi131/",
            "twitter": "https://twitter.com/shxx131bi131",
            "spotify": "https://open.spotify.com/artist/0UntV1Bw2hk3fbRrm9eMP6"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802006/80200667.jpg?version=179774&d=20210514155045"
    },
    "BAE173": {
        "names": {
            "KO": "비에이이173",
            "EN": "BAE173"
        },
        "sns": {
            "instagram": "https://www.instagram.com/official__bae173/",
            "twitter": "https://twitter.com/BAE173_official",
            "spotify": "https://open.spotify.com/artist/60315n11JElel8KhdHg8jM",
            "tiktok": "https://www.tiktok.com/@official__bae173"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803465/80346587.jpg"
    },
    "B.A.P": {
        "names": {
            "KO": "비에이피",
            "EN": "B.A.P"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCKVe2O60ESTBFIkUR8zyHSw",
            "instagram": "https://www.instagram.com/worldwide_bap/",
            "fancafe": "http://cafe.daum.net/TS-ASIAN",
            "spotify": "https://open.spotify.com/artist/6kxCoNfY6U1eP0Yc88phvk"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801198/80119838.jpg"
    },
    "B.O.Y": {
        "names": {
            "KO": "비오브유",
            "EN": "B.O.Y"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCmwRUeojdrztrJFa7DCnLzw",
            "twitter": "https://www.twitter.com/official_bofyou",
            "instagram": "https://www.instagram.com/official_bofyou/",
            "fancafe": "http://cafe.daum.net/officialkhyv",
            "spotify": "https://open.spotify.com/artist/1f0vFa4YRojVrvXUwegT5c",
            "tiktok": "https://www.tiktok.com/@bofyou_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803374/80337417.jpg"
    },
    "BewhY": {
        "names": {
            "KO": "비와이",
            "EN": "BewhY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCManvmyxmnrWcmlm8_VfiAA",
            "instagram": "https://www.instagram.com/bewhy.meshasoulja/",
            "twitter": "https://twitter.com/meshasoulja",
            "spotify": "https://open.spotify.com/artist/1wsoV3RXPkxVz3PwsNRI5K",
            "tiktok": "https://www.tiktok.com/@bewhy.meshasoulja"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801589/80158942.jpg"
    },
    "B1A4": {
        "names": {
            "KO": "비원에이포",
            "EN": "B1A4"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCDBLl8TPgGzAzUGaqbpwAZA",
            "instagram": "https://www.instagram.com/b1a4ganatanatda/",
            "twitter": "https://twitter.com/_B1A4OFFICIAL",
            "fancafe": "http://cafe.daum.net/-b1a4",
            "spotify": "https://open.spotify.com/artist/3sxWOFw4MSN54SIQ8np6iG",
            "tiktok": "https://www.tiktok.com/@official_b1a4"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800984/80098436.jpg"
    },
    "BTOB": {
        "names": {
            "KO": "비투비",
            "EN": "BTOB"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCgB7A457ULlgm5c3948vr-w",
            "instagram": "https://www.instagram.com/cube_official_btob/",
            "twitter": "https://twitter.com/OFFICIALBTOB",
            "fancafe": "http://cafe.daum.net/cube-btob",
            "spotify": "https://open.spotify.com/artist/2hcsKca6hCfFMwwdbFvenJ",
            "tiktok": "https://www.tiktok.com/@official_btob"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801234/80123427.jpg"
    },
    "BIGBANG": {
        "names": {
            "KO": "빅뱅",
            "EN": "BIGBANG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCzw-C7fNfs018R1FzIKnlaA",
            "twitter": "https://twitter.com/YG_GlobalVIP",
            "spotify": "https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800200/80020023.jpg"
    },
    "VIXX": {
        "names": {
            "KO": "빅스",
            "EN": "VIXX"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCNEjjFoX8M3aIz416Ep90XA",
            "instagram": "https://www.instagram.com/vixx_stargram/",
            "twitter": "https://twitter.com/RealVIXX",
            "fancafe": "http://cafe.daum.net/RealVIXX",
            "spotify": "https://open.spotify.com/artist/5BkB3rXc0qIdUtuEnhbK0A"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801270/80127088.jpg"
    },
    "BIGSTAR": {
        "names": {
            "KO": "빅스타",
            "EN": "BIGSTAR"
        },
        "sns": {
            "instagram": "https://www.instagram.com/bravebigstar/",
            "twitter": "https://twitter.com/BRAVEBIGSTAR",
            "spotify": "https://open.spotify.com/artist/6GPU7qvEKtuk1Bc8rkWi1k"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801312/80131233.jpg"
    },
    "BIGONE": {
        "names": {
            "KO": "빅원",
            "EN": "BIGONE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC6dBcqQrm0ylqw1iWvanNIw",
            "instagram": "https://www.instagram.com/bigoneisthename/",
            "twitter": "https://twitter.com/BIGONE1STHENAME",
            "spotify": "https://open.spotify.com/artist/0bQhUyXffQjkd6horP6fKX",
            "tiktok": "https://www.tiktok.com/@officialbigoneisthename"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801354/80135454.jpg"
    },
    "VICTON": {
        "names": {
            "KO": "빅톤",
            "EN": "VICTON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCQ7a83KJBE7w_txsT7VaJ8g",
            "instagram": "https://www.instagram.com/victon1109/",
            "twitter": "https://twitter.com/VICTON1109",
            "fancafe": "http://cafe.daum.net/PlanAboys",
            "spotify": "https://open.spotify.com/artist/0ziR2zN0NFcB4x1G3P8cW3",
            "tiktok": "https://www.tiktok.com/@official_victon1109"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802713/80271325.jpg"
    },
    "Beenzino": {
        "names": {
            "KO": "빈지노",
            "EN": "Beenzino"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCyFkumV0dfLxSY602sIYNvw",
            "instagram": "https://www.instagram.com/realisshoman/",
            "twitter": "https://twitter.com/isshoman",
            "spotify": "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
            "tiktok": "https://www.tiktok.com/@whogotrealisshoman"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800584/80058413.jpg"
    },
    "VINXEN": {
        "names": {
            "KO": "빈첸",
            "EN": "VINXEN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/kiff_vinxen/",
            "spotify": "https://open.spotify.com/artist/4T6xiCykTP9rCNaEPU7D4q"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200546/20054658.jpg"
    },
    "Billlie": {
        "names": {
            "KO": "빌리",
            "EN": "Billlie"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCyc9sUCxELTDK9vELO5Fzeg",
            "twitter": "https://twitter.com/Billlieofficial",
            "instagram": "https://www.instagram.com/billlie.official/",
            "fancafe": "https://cafe.daum.net/Billlie",
            "spotify": "https://open.spotify.com/artist/2GQxKDojobwBjZMPf7aoh0"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201470/20147081.jpg?version=320626&d=20211110164101"
    },
    "Samuel": {
        "names": {
            "KO": "사무엘",
            "EN": "Samuel"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC4rEviSMAufS0aUlKf1Aacg",
            "twitter": "https://twitter.com/ksamuelofficial",
            "instagram": "https://instagram.com/its_kimsamuel/",
            "fancafe": "http://cafe.daum.net/better-best",
            "spotify": "https://open.spotify.com/artist/0dtXsO617bBzBwDLWC6HXt",
            "tiktok": "https://www.tiktok.com/@samuelkimofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802181/80218178.jpg"
    },
    "SimonDominic": {
        "names": {
            "KO": "사이먼 도미닉",
            "EN": "Simon Dominic"
        },
        "sns": {
            "instagram": "https://www.instagram.com/longlivesmdc/",
            "spotify": "https://open.spotify.com/artist/57W9ikVc6O2wLDtmclSjvN"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800092/80009273.jpg"
    },
    "SandaraPark": {
        "names": {
            "KO": "산다라박",
            "EN": "Sandara Park"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCX4uTPyZkp1d0ogkNNp8LtA",
            "twitter": "https://twitter.com/krungy21",
            "instagram": "https://www.instagram.com/daraxxi/",
            "spotify": "https://open.spotify.com/artist/3LKVw6XQYcot0OZMFmf4IP"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800560/80056060.jpg"
    },
    "Sandeul": {
        "names": {
            "KO": "산들",
            "EN": "Sandeul"
        },
        "sns": {
            "instagram": "https://www.instagram.com/sandoriganatanatda/",
            "twitter": "https://twitter.com/sandeul920320",
            "spotify": "https://open.spotify.com/artist/2QeJBmgBdpH4i3uJns5Rdx"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800986/80098628.jpg"
    },
    "SanE": {
        "names": {
            "KO": "산이",
            "EN": "San E"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCrhgVHA_uAiT9BoGV9qRKvg",
            "instagram": "https://www.instagram.com/sanethebigboy/",
            "twitter": "https://twitter.com/san_e",
            "spotify": "https://open.spotify.com/artist/61MMiylth1injW39oZBuYB",
            "tiktok": "https://www.tiktok.com/@sanethebigboy"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800505/80050523.jpg"
    },
    "SESONEON": {
        "names": {
            "KO": "새소년",
            "EN": "SE SO NEON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCpltpdgUIrAlf5oPmHslyLQ",
            "instagram": "https://www.instagram.com/se_so_neon/",
            "twitter": "https://twitter.com/se_so_neon",
            "fancafe": "http://cafe.daum.net/SESONEON",
            "spotify": "https://open.spotify.com/artist/07OePkse2fcvU9wlVftNMl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200272/20027236.jpg"
    },
    "SAMKIM": {
        "names": {
            "KO": "샘김",
            "EN": "SAM KIM"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC5M6e-dXCcyuAboEKBUI55w",
            "instagram": "https://www.instagram.com/leegititssam/",
            "twitter": "https://twitter.com/leegititssam",
            "spotify": "https://open.spotify.com/artist/4BBN286rBKyCWsSPq2cxYO"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801827/80182769.jpg"
    },
    "SHINee": {
        "names": {
            "KO": "샤이니",
            "EN": "SHINee"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCyPwRgc3gQGqhk6RoGS50Ug",
            "instagram": "https://www.instagram.com/shinee/",
            "twitter": "https://twitter.com/SHINee",
            "spotify": "https://open.spotify.com/artist/2hRQKC0gqlZGPrmUKbcchR"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800442/80044237.jpg"
    },
    "BIGNaughty": {
        "names": {
            "KO": "서동현",
            "EN": "BIGNaughty"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC70FvCB8vQ2C0DbDjMGazYw",
            "spotify": "https://open.spotify.com/artist/7cEaNXXTHx3LokbjUUyHal",
            "tiktok": "https://www.tiktok.com/@nau_ty777"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200904/20090461.jpg"
    },
    "Seori": {
        "names": {
            "KO": "서리",
            "EN": "Seori"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCLSH9fErJNb8lIiyCmwY3tA",
            "twitter": "https://twitter.com/seori_official",
            "instagram": "https://www.instagram.com/iam_seori/",
            "fancafe": "https://cafe.daum.net/Seori.official",
            "spotify": "https://open.spotify.com/artist/2bWTIIQP9zaVc55RaMGu7e"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803410/80341008.jpg"
    },
    "SEOEUNKWANG": {
        "names": {
            "KO": "서은광",
            "EN": "Seo Eun-Kwang"
        },
        "sns": {
            "instagram": "https://www.instagram.com/btob_silver_light/",
            "twitter": "https://twitter.com/BTOB_SEKwang",
            "spotify": "https://open.spotify.com/artist/6Uug3azJYNwnLkO82CTTY2"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801234/80123430.jpg"
    },
    "SEOHYUN": {
        "names": {
            "KO": "서현",
            "EN": "SEOHYUN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/seojuhyun_s/",
            "twitter": "https://twitter.com/sjhsjh0628",
            "spotify": "https://open.spotify.com/artist/5uM1Et50auro2hTS6ZLcmT"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800264/80026436.jpg"
    },
    "SUNMI": {
        "names": {
            "KO": "선미",
            "EN": "SUNMI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCsVpgRB8YHLWA0ZrkhtHvTA",
            "instagram": "https://www.instagram.com/miyayeah/",
            "twitter": "https://twitter.com/official_sunmi_",
            "spotify": "https://open.spotify.com/artist/6MoXcK2GyGg7FIyxPU5yW6",
            "tiktok": "https://www.tiktok.com/@official_sunmi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800221/80022186.jpg"
    },
    "SunwooJungA": {
        "names": {
            "KO": "선우정아",
            "EN": "Sunwoo Jung A"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/04L3elxyr0XFua2Ek3domW",
            "tiktok": "https://www.tiktok.com/@sunwoojunga"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800127/80012738.jpg"
    },
    "SULLI": {
        "names": {
            "KO": "설리",
            "EN": "SULLI"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jelly_jilli/",
            "spotify": "https://open.spotify.com/artist/1OjcBoc71FwlzD5cJGx7xk"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800607/80060787.jpg"
    },
    "SUNGSIKYUNG": {
        "names": {
            "KO": "성시경",
            "EN": "SUNG SI KYUNG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCl23-Cci_SMqyGXE1T_LYUg",
            "instagram": "https://www.instagram.com/mayersung/",
            "spotify": "https://open.spotify.com/artist/7jFUYMpMUBDL4JQtMZ5ilc"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/29/2946.jpg"
    },
    "SATURDAY": {
        "names": {
            "KO": "세러데이",
            "EN": "SATURDAY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCOWHtRSzgSyNA0MMkZdchJQ/",
            "instagram": "https://www.instagram.com/official_saturday/",
            "twitter": "https://twitter.com/saturday718/",
            "fancafe": "http://cafe.daum.net/saturday0718",
            "spotify": "https://open.spotify.com/artist/4UeJgAodtmUXfxU1GoJUph",
            "tiktok": "https://www.tiktok.com/@saturday_718"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200607/20060793.jpg"
    },
    "SevenOClock": {
        "names": {
            "KO": "세븐어클락",
            "EN": "Seven OClock"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC2bB4TIQIIzuWVpF0YwrC0w",
            "twitter": "https://twitter.com/7OC_official",
            "instagram": "https://www.instagram.com/7oc_official/",
            "fancafe": "http://cafe.daum.net/SOCofficial",
            "spotify": "https://open.spotify.com/artist/4NeKLW82adFCE8Y6r50X1E",
            "tiktok": "https://www.tiktok.com/@7oc_2017"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802795/80279595.jpg"
    },
    "SEVENTEEN": {
        "names": {
            "KO": "세븐틴",
            "EN": "SEVENTEEN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCfkXDY7vwkcJ8ddFGz8KusA",
            "instagram": "https://www.instagram.com/saythename_17/",
            "twitter": "https://twitter.com/pledis_17",
            "fancafe": "http://cafe.daum.net/pledis-17",
            "spotify": "https://open.spotify.com/artist/7nqOGRxlXj7N2JYbgNEjYH",
            "tiktok": "https://www.tiktok.com/@seventeen17_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802322/80232283.jpg"
    },
    "EXO-SC": {
        "names": {
            "KO": "세훈&찬열",
            "EN": "EXO-SC"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/6741jcSlgsv0M3B4ruIPS5"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803328/80332817.jpg"
    },
    "SONAMOO": {
        "names": {
            "KO": "소나무",
            "EN": "SONAMOO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/sonamoo_insta/",
            "fancafe": "http://cafe.daum.net/officialsonamoo",
            "spotify": "https://open.spotify.com/artist/2MY1GcYSTw3QH2C1Umzsq0"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802146/80214694.jpg"
    },
    "SNSD": {
        "names": {
            "KO": "소녀시대",
            "EN": "GIRLS GENERATION"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCPENYtHg4Xhmm6oX8zaQA7Q",
            "twitter": "https://twitter.com/girlsgeneration",
            "instagram": "https://www.instagram.com/girlsgeneration/",
            "fancafe": "http://cafe.daum.net/milkye",
            "spotify": "https://open.spotify.com/artist/0Sadg1vgvaPqGTOjxu0N6c"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800264/80026432.jpg"
    },
    "SOYOU": {
        "names": {
            "KO": "소유",
            "EN": "SOYOU"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCs29NQY8SdvtjhxYxvy3Grg",
            "instagram": "https://www.instagram.com/soooo_you/",
            "twitter": "https://twitter.com/official_soyou",
            "fancafe": "http://cafe.daum.net/OfficialSoyou",
            "spotify": "https://open.spotify.com/artist/3b4kLCI0ZJW47TFsNRqgCb",
            "tiktok": "https://www.tiktok.com/@official_soyou"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800696/80069631.jpg"
    },
    "Sojung": {
        "names": {
            "KO": "소정",
            "EN": "Sojung"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-llI8ILWS9XxHZDcwkUMyg",
            "instagram": "https://www.instagram.com/sojung.lc/",
            "twitter": "https://twitter.com/LC__Sojung"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801665/80166591.jpg"
    },
    "SONDONGWOON": {
        "names": {
            "KO": "손동운",
            "EN": "SON DONGWOON"
        },
        "sns": {
            "twitter": "https://twitter.com/beastdw",
            "instagram": "https://www.instagram.com/highlight_dnpn/",
            "spotify": "https://open.spotify.com/artist/5UzpNJd6zHGN9syxBN8fRY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800603/80060360.jpg"
    },
    "SHY": {
        "names": {
            "KO": "손호영",
            "EN": "SHY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCs51d5B2LlejPTVimFFETCA",
            "instagram": "https://www.instagram.com/dajungho2/",
            "twitter": "https://twitter.com/dajungho2",
            "spotify": "https://open.spotify.com/artist/6V9RVcHn2DXXYRuGDUoMNK"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/17/1781.jpg"
    },
    "SOLAR": {
        "names": {
            "KO": "솔라",
            "EN": "SOLAR"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCNx0TXIuGVEA_TWB5H2I6Lg",
            "instagram": "https://www.instagram.com/solarkeem/",
            "spotify": "https://open.spotify.com/artist/5cYcI546S8Lf97m4mNdYLD"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801778/80177860.jpg"
    },
    "Solbi": {
        "names": {
            "KO": "솔비",
            "EN": "Solbi"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCYOXaMjoodvzodBT3oO0D3A",
            "twitter": "https://twitter.com/solbbest",
            "instagram": "https://www.instagram.com/solbibest/",
            "spotify": "https://open.spotify.com/artist/0vj6jCa4tnua7PK729Wvbm",
            "tiktok": "https://www.tiktok.com/@solbi_korea"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800249/80024975.jpg"
    },
    "SOLJI": {
        "names": {
            "KO": "솔지",
            "EN": "SOLJI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCGn4NiJio-ELCUUBk17YOMw",
            "instagram": "https://www.instagram.com/soul.g_heo/",
            "spotify": "https://open.spotify.com/artist/54EEMb9uR0v9PWoWtQhTEo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800292/80029222.jpg"
    },
    "SongGain": {
        "names": {
            "KO": "송가인",
            "EN": "Song Gain"
        },
        "sns": {
            "instagram": "https://www.instagram.com/songgain_/",
            "spotify": "https://open.spotify.com/artist/5t5zmsIdTDRqDeI17tilpd",
            "tiktok": "https://www.tiktok.com/@songgain_"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200367/20036705.jpg"
    },
    "MINO": {
        "names": {
            "KO": "송민호",
            "EN": "MINO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/realllllmino/",
            "twitter": "https://twitter.com/official_mino_",
            "spotify": "https://open.spotify.com/artist/3ytV7vc4ZuwGgwaOuWvkk8"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801858/80185895.jpg"
    },
    "SONGYUVIN": {
        "names": {
            "KO": "송유빈",
            "EN": "SONG YU VIN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/syv0428/",
            "spotify": "https://open.spotify.com/artist/5bO0Iy0ozHhSelVBOttCyT"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802068/80206852.jpg"
    },
    "SongJiEun": {
        "names": {
            "KO": "송지은",
            "EN": "Song Ji Eun"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCf9V1z6h8OTwzRHivXo85pQ",
            "twitter": "https://twitter.com/songjieun_55",
            "instagram": "https://www.instagram.com/bimil_jieun/",
            "spotify": "https://open.spotify.com/artist/0D40an6y5Cv6sRzMGsRRQ8"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800620/80062042.jpg"
    },
    "SHAUN": {
        "names": {
            "KO": "숀",
            "EN": "SHAUN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC3Zqhlhhf01s24EiM_c7fPQ",
            "spotify": "https://open.spotify.com/artist/72nLe76yBFSlP6VBzME358",
            "tiktok": "https://www.tiktok.com/@shaunthehuman"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801196/80119634.jpg"
    },
    "SURAN": {
        "names": {
            "KO": "수란",
            "EN": "SURAN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCl9xXfV8RueurJOlwQaKizw",
            "instagram": "https://www.instagram.com/suranelenashin/",
            "twitter": "https://twitter.com/suranelenashin",
            "spotify": "https://open.spotify.com/artist/1mORehSVEd7lcaT2d7Sl2K",
            "tiktok": "https://www.tiktok.com/@suranunnii"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800860/80086048.jpg"
    },
    "SUZY": {
        "names": {
            "KO": "수지",
            "EN": "SUZY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC7ukOKu7-6G-m5d4hOXrhfQ",
            "instagram": "https://www.instagram.com/skuukzky/",
            "twitter": "https://twitter.com/Suzy",
            "spotify": "https://open.spotify.com/artist/4U80LJd8sG6U9YTFP5izka"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800730/80073016.jpg"
    },
    "SUPERBEE": {
        "names": {
            "KO": "수퍼비",
            "EN": "SUPERBEE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/originalgimchi/",
            "spotify": "https://open.spotify.com/artist/0Q5XzDpn7DCI5jlubok4xb"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801347/80134748.jpg"
    },
    "SUHO": {
        "names": {
            "KO": "수호",
            "EN": "SUHO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/kimjuncotton/",
            "spotify": "https://open.spotify.com/artist/5zkf2Na8DKKJmtWX5Xrx3m"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801246/80124634.jpg"
    },
    "SoolJ": {
        "names": {
            "KO": "술제이",
            "EN": "Sool J"
        },
        "sns": {
            "instagram": "https://www.instagram.com/okay_soolj/",
            "spotify": "https://open.spotify.com/artist/1Pd9OUbhw9V8yzDLJIjPiP"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800554/80055430.jpg"
    },
    "SuperM": {
        "names": {
            "KO": "슈퍼엠",
            "EN": "SuperM"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCcjV926qiLr_Ghw6A0lTNjA",
            "instagram": "https://www.instagram.com/superm/",
            "twitter": "https://twitter.com/superm",
            "spotify": "https://open.spotify.com/artist/5BHFSMEjfLVx1JwRWjAOsE",
            "tiktok": "https://www.tiktok.com/@superm_smtown"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803340/80334031.jpg"
    },
    "SUPERJUNIOR": {
        "names": {
            "KO": "슈퍼주니어",
            "EN": "SUPER JUNIOR"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCFipx49muiJ8-d2YsnLlNVw",
            "instagram": "https://www.instagram.com/superjunior/",
            "twitter": "https://twitter.com/SJofficial",
            "spotify": "https://open.spotify.com/artist/6gzXCdfYfFe5XKhPKkYqxV",
            "tiktok": "https://www.tiktok.com/@superjunior_smtown"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800135/80013533.jpg"
    },
    "SNUPER": {
        "names": {
            "KO": "스누퍼",
            "EN": "SNUPER"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCr3-7tntLULvo6cJsOIxJ6Q",
            "instagram": "https://www.instagram.com/snuper6/",
            "twitter": "https://twitter.com/snuper6",
            "fancafe": "http://cafe.daum.net/snuper6",
            "spotify": "https://open.spotify.com/artist/3RkN2CENR9zgHLKn2H3hcI"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802234/80223425.jpg"
    },
    "swedenlaundry": {
        "names": {
            "KO": "스웨덴세탁소",
            "EN": "swedenlaundry"
        },
        "sns": {
            "instagram": "https://www.instagram.com/swedenlaundry_s2/",
            "twitter": "https://twitter.com/Sweden_Laundry",
            "spotify": "https://open.spotify.com/artist/4saSwzwWZffYhoS1aFgncp"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801290/80129020.jpg"
    },
    "Swings": {
        "names": {
            "KO": "스윙스",
            "EN": "Swings"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC9FAi5CfRQ7CoG7Rxx2RMcA",
            "twitter": "https://twitter.com/itsjustswings",
            "instagram": "https://www.instagram.com/itsjustswings/",
            "spotify": "https://open.spotify.com/artist/6F5tPDq3TIduDv2ki6O1Oq"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800286/80028663.jpg"
    },
    "StandingEgg": {
        "names": {
            "KO": "스탠딩 에그",
            "EN": "Standing Egg"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCLpL59_S_VweDoY3kut93vw",
            "instagram": "https://www.instagram.com/standingegg/",
            "twitter": "https://twitter.com/standingEGG",
            "spotify": "https://open.spotify.com/artist/6a3Mfrn2XBR1DfPg1QGa1d"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800671/80067125.jpg"
    },
    "STAYC": {
        "names": {
            "KO": "스테이씨",
            "EN": "STAYC"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCod5V2dpnpJLklGvVOv5FcQ",
            "instagram": "https://www.instagram.com/stayc_highup/",
            "twitter": "https://twitter.com/STAYC_official",
            "fancafe": "http://cafe.daum.net/STAYC",
            "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
            "tiktok": "https://www.tiktok.com/@stayc_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803472/80347276.jpg"
    },
    "StellaJang": {
        "names": {
            "KO": "스텔라장",
            "EN": "Stella Jang"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCx4T73vmS0JGRkAFeEBOOmQ",
            "instagram": "https://www.instagram.com/stellajang_official/",
            "spotify": "https://open.spotify.com/artist/2Y9AUayH5pyZpVfkDYDfJV"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801535/80153535.jpg"
    },
    "StrayKids": {
        "names": {
            "KO": "스트레이 키즈",
            "EN": "Stray Kids"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC9rMiEjNaCSsebs31MRDCRA",
            "instagram": "https://www.instagram.com/realstraykids/",
            "twitter": "https://twitter.com/Stray_Kids",
            "spotify": "https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE",
            "tiktok": "https://www.tiktok.com/@jypestraykids"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200460/20046081.jpg"
    },
    "SPECTRUM": {
        "names": {
            "KO": "스펙트럼",
            "EN": "SPECTRUM"
        },
        "sns": {
            "fancafe": "http://cafe.daum.net/spectrumm",
            "spotify": "https://open.spotify.com/artist/738AtLtkMcNmQrk64Pxl7Q"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200568/20056897.jpg"
    },
    "SLEEPY": {
        "names": {
            "KO": "슬리피",
            "EN": "SLEEPY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCjmJdOuwnvtvZRIJV2wqKMw",
            "twitter": "https://twitter.com/kimsleepy",
            "spotify": "https://open.spotify.com/artist/5qp3vJC5OdDo1Zsrsl3sIR"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800269/80026961.jpg"
    },
    "SEULONG": {
        "names": {
            "KO": "슬옹",
            "EN": "SEULONG"
        },
        "sns": {
            "instagram": "https://www.instagram.com/lsod.d/",
            "twitter": "https://twitter.com/2AMONG",
            "spotify": "https://open.spotify.com/artist/0lfuVlyKgbJIpdDXEfGRiR",
            "tiktok": "https://www.tiktok.com/@lsod.d"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800616/80061690.jpg"
    },
    "cignature": {
        "names": {
            "KO": "시그니처",
            "EN": "cignature"
        },
        "sns": {
            "instagram": "https://www.instagram.com/cignature_j9/",
            "twitter": "https://twitter.com/cignature_J9",
            "fancafe": "http://cafe.daum.net/officialcignature",
            "spotify": "https://open.spotify.com/artist/5x9WawpXGR82PWDFk9CKYQ",
            "tiktok": "https://www.tiktok.com/@cignature_j9"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201009/20100971.jpg"
    },
    "SECRET": {
        "names": {
            "KO": "시크릿",
            "EN": "SECRET"
        },
        "sns": {
            "fancafe": "http://cafe.daum.net/SECRETTIME",
            "spotify": "https://open.spotify.com/artist/503DjcVO5Ku1NgLPhVuNg7"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800602/80060294.jpg"
    },
    "SECRETNUMBER": {
        "names": {
            "KO": "시크릿넘버",
            "EN": "SECRET NUMBER"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCIhPBu7gVRi1tnre0ZfXadg",
            "twitter": "https://twitter.com/5ecretNumber",
            "instagram": "https://www.instagram.com/secretnumber.official/",
            "spotify": "https://open.spotify.com/artist/7qxo9RTWfEoFKN7XGtNV6V",
            "tiktok": "https://www.tiktok.com/@secretnumber.official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201081/20108174.jpg"
    },
    "Sik-K": {
        "names": {
            "KO": "식케이",
            "EN": "Sik-K"
        },
        "sns": {
            "instagram": "https://www.instagram.com/younghotyellow94/",
            "twitter": "https://twitter.com/younghotyellow",
            "spotify": "https://open.spotify.com/artist/5DIi2JWfQPTKffaVBlIYRn",
            "tiktok": "https://www.tiktok.com/@sik.k94"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801898/80189848.jpg"
    },
    "ShinYongJae": {
        "names": {
            "KO": "신용재",
            "EN": "Shin Yong Jae"
        },
        "sns": {
            "instagram": "https://www.instagram.com/asddddw/",
            "spotify": "https://open.spotify.com/artist/2frFGmni9tkRgXYdXmzQvR"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800772/80077227.jpg"
    },
    "ShinWonHo": {
        "names": {
            "KO": "신원호",
            "EN": "Shin Won Ho"
        },
        "sns": {
            "instagram": "https://www.instagram.com/cg__shinwonho/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801306/80130615.jpg"
    },
    "SHINHYESUNG": {
        "names": {
            "KO": "신혜성",
            "EN": "SHIN HYE SUNG"
        },
        "sns": {
            "instagram": "https://www.instagram.com/shinhyesung_official/",
            "spotify": "https://open.spotify.com/artist/5UQ3p0DuxXEhzWYroDNUXl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/178/17872.jpg"
    },
    "Shinhwa": {
        "names": {
            "KO": "신화",
            "EN": "Shinhwa"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCfLAn71HQuv5vVte_85v5AQ",
            "instagram": "https://www.instagram.com/shinhwa_official/",
            "twitter": "https://twitter.com/ShinhwaCompany",
            "fancafe": "http://cafe.daum.net/shcj-official",
            "spotify": "https://open.spotify.com/artist/0jVvkFPa6YbFXQ3Qmhita0"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/43/4375.jpg"
    },
    "10cm": {
        "names": {
            "ETC": "10cm",
            "KO": "십센치"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCRmShE13u8THvf_ptRVktRg",
            "instagram": "https://www.instagram.com/10cm_official/",
            "spotify": "https://open.spotify.com/artist/6zn0ihyAApAYV51zpXxdEp",
            "tiktok": "https://www.tiktok.com/@10cm_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800671/80067149.jpg"
    },
    "PSY": {
        "names": {
            "KO": "싸이",
            "EN": "PSY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCrDkAvwZum-UTjHmzDI2iIw",
            "instagram": "https://www.instagram.com/42psy42/",
            "twitter": "https://twitter.com/psy_oppa",
            "spotify": "https://open.spotify.com/artist/2dd5mrQZvg6SmahdgVKDzh"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/35/3572.jpg"
    },
    "Ciipher": {
        "names": {
            "KO": "싸이퍼",
            "EN": "Ciipher"
        },
        "sns": {
            "twitter": "https://twitter.com/RAIN_Ciipher",
            "instagram": "https://www.instagram.com/ciipher_official/",
            "fancafe": "https://cafe.daum.net/Ciipher",
            "spotify": "https://open.spotify.com/artist/18VvNIaKQgZXhSBnu7p5z7"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803520/80352006.jpg?version=300129&d=20210312134945"
    },
    "SunnyHill": {
        "names": {
            "KO": "써니힐",
            "EN": "Sunny Hill"
        },
        "sns": {
            "twitter": "https://twitter.com/SunnyHill_Offic",
            "fancafe": "http://cafe.daum.net/Sunny-Hill",
            "spotify": "https://open.spotify.com/artist/1ePYD8tMMM4Y8gbwi69vaf"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800270/80027073.jpg"
    },
    "3YE": {
        "names": {
            "ETC": "3YE",
            "KO": "써드아이"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/65SWpUO42tdFbEhdfj1ryf",
            "tiktok": "https://www.tiktok.com/@3ye_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200839/20083916.jpg"
    },
    "SAAY": {
        "names": {
            "KO": "쎄이",
            "EN": "SAAY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/saayworld/",
            "spotify": "https://open.spotify.com/artist/2pvCf5g7XBReiPIvcq7W18",
            "tiktok": "https://www.tiktok.com/@saayworld"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200417/20041751.jpg"
    },
    "SISTAR": {
        "names": {
            "KO": "씨스타",
            "EN": "SISTAR"
        },
        "sns": {
            "twitter": "https://twitter.com/sistarsistar",
            "instagram": "https://www.instagram.com/official_sistar/",
            "spotify": "https://open.spotify.com/artist/2wTLheTmMcFCA4hdY8hZJP"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800696/80069630.jpg"
    },
    "CIX": {
        "names": {
            "KO": "씨아이엑스",
            "EN": "CIX"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCuaslC77K-NmCy8Xwk7x0hA",
            "twitter": "https://twitter.com/CIX_official",
            "instagram": "https://www.instagram.com/cix.official/",
            "fancafe": "http://cafe.daum.net/OfficialCIX",
            "spotify": "https://open.spotify.com/artist/1lHfzEkKmmvdVDDDLKkcsd",
            "tiktok": "https://www.tiktok.com/@cix_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803326/80332630.jpg"
    },
    "CNBLUE": {
        "names": {
            "KO": "씨엔블루",
            "EN": "CNBLUE"
        },
        "sns": {
            "twitter": "https;//twitter.com/official_CNBLUE",
            "fancafe": "http://cafe.daum.net/CNBLUE",
            "spotify": "https://open.spotify.com/artist/6dCz3spfpIvqqqsIoP6wXi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800632/80063207.jpg"
    },
    "CL": {
        "names": {
            "KO": "씨엘",
            "EN": "CL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCuX8lXIexG8dRXFx54CVm2Q",
            "twitter": "https://twitter.com/chaelincl",
            "instagram": "https://www.instagram.com/chaelincl/",
            "spotify": "https://open.spotify.com/artist/0tzSBCPJZmHTdOA3ZV2mN3",
            "tiktok": "https://www.tiktok.com/@chaelincl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800460/80046074.jpg"
    },
    "CLC": {
        "names": {
            "KO": "씨엘씨",
            "EN": "CLC"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnOTemIK0FqCe2FHbr9mWFw",
            "instagram": "https://www.instagram.com/cube_clc_official/",
            "twitter": "https://twitter.com/CUBECLC",
            "fancafe": "http://cafe.daum.net/CUBE-CLC",
            "spotify": "https://open.spotify.com/artist/6QyO41KctzGc70mVaVnXQO",
            "tiktok": "https://www.tiktok.com/@cube_clc_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802238/80223842.jpg"
    },
    "CJAMM": {
        "names": {
            "KO": "씨잼",
            "EN": "C JAMM"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/2ZT3bnHPOdErwCLdP5aHqR"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801559/80155994.jpg"
    },
    "(G)I-DLE": {
        "names": {
            "KO": "(여자)아이들",
            "EN": "(G)I-DLE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCritGVo7pLJLUS8wEu32vow",
            "instagram": "https://www.instagram.com/official_g_i_dle/",
            "twitter": "https://twitter.com/G_I_DLE",
            "fancafe": "http://cafe.daum.net/cube-g-i-dle",
            "spotify": "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
            "tiktok": "https://www.tiktok.com/@official_gidle"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200564/20056456.jpg"
    },
    "ADOY": {
        "names": {
            "KO": "아도이",
            "EN": "ADOY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/adoyband/",
            "twitter": "https://twitter.com/adoyband",
            "spotify": "https://open.spotify.com/artist/64sY7LsUjNE3ifONkftTXC"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200381/20038118.jpg"
    },
    "ARIN": {
        "names": {
            "KO": "아린",
            "EN": "ARIN"
        },
        "sns": {
            "instagram": "https://instagram.com/ye._.vely618/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802269/80226926.jpg"
    },
    "APOKI": {
        "names": {
            "KO": "아뽀키",
            "EN": "APOKI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCjmlTmDS3d2azdWlXNY9oFQ",
            "twitter": "https://twitter.com/Apoki2",
            "instagram": "https://www.instagram.com/imapoki/",
            "spotify": "https://open.spotify.com/artist/0JVB3oaSxGrbnhzIiKwiR9"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201271/20127109.jpg"
    },
    "ASTRO": {
        "names": {
            "KO": "아스트로",
            "EN": "ASTRO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCZqY2yIsAM9wh3vvMwKd27g",
            "instagram": "https://www.instagram.com/officialastro/",
            "twitter": "https://twitter.com/offclASTRO",
            "fancafe": "http://cafe.daum.net/fantagio-boys",
            "spotify": "https://open.spotify.com/artist/4pz4uzOMpJQyV8UTsDy4H8",
            "tiktok": "https://www.tiktok.com/@astro_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802566/80256671.jpg"
    },
    "IVE": {
        "names": {
            "KO": "아이브",
            "EN": "IVE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-Fnix71vRP64WXeo0ikd0Q",
            "instagram": "https://www.instagram.com/ivestarship/",
            "twitter": "https://twitter.com/IVEstarship",
            "fancafe": "https://cafe.daum.net/IVEstarship",
            "spotify": "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201486/20148657.jpg"
    },
    "I.M": {
        "names": {
            "KO": "아이엠",
            "EN": "I.M"
        },
        "sns": {
            "instagram": "https://www.instagram.com/imnameim/",
            "spotify": "https://open.spotify.com/artist/49tkHHS0mXwa5eLYvyvKyd"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802305/80230526.jpg"
    },
    "IONE": {
        "names": {
            "KO": "아이원",
            "EN": "IONE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/___ione___/",
            "twitter": "https://twitter.com/__ione__",
            "spotify": "https://open.spotify.com/artist/6zT2AFUvTwncuROkM5hMWR"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200196/20019643.jpg"
    },
    "IU": {
        "names": {
            "KO": "아이유",
            "EN": "IU"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww",
            "instagram": "https://www.instagram.com/dlwlrma/",
            "twitter": "https://twitter.com/_IUofficial",
            "fancafe": "http://cafe.daum.net/IU",
            "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg"
    },
    "IZ": {
        "names": {
            "KO": "아이즈",
            "EN": "IZ"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCclS5jox7bUSxceeXENq63w",
            "twitter": "https://twitter.com/official__IZ",
            "instagram": "https://www.instagram.com/official__iz/",
            "fancafe": "http://cafe.daum.net/officializ",
            "spotify": "https://open.spotify.com/artist/4XiZ3nAGoPv8K8IMktGc3b",
            "tiktok": "https://www.tiktok.com/@iz__official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802895/80289577.jpg"
    },
    "IZ*ONE": {
        "names": {
            "KO": "아이즈원",
            "EN": "IZ*ONE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCe_oTYByLWQYCUmgmOMU_xw",
            "instagram": "https://www.instagram.com/official_izone/",
            "twitter": "https://twitter.com/official_izone",
            "fancafe": "http://cafe.daum.net/official-izone",
            "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH",
            "tiktok": "https://www.tiktok.com/@officializone"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/original/200674/20067467.jpg"
    },
    "ICHILLIN": {
        "names": {
            "KO": "아이칠린",
            "EN": "ICHILLIN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ichillin_km/",
            "twitter": "https://twitter.com/ichillin_km",
            "fancafe": "https://cafe.daum.net/ICHILLIN"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201432/20143202.jpg"
    },
    "iKON": {
        "names": {
            "KO": "아이콘",
            "EN": "iKON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCWxCyZibDIWIrGIgP25mbfw",
            "instagram": "https://www.instagram.com/withikonic/",
            "twitter": "https://twitter.com/YG_iKONIC",
            "fancafe": "http://cafe.daum.net/iKONYG",
            "spotify": "https://open.spotify.com/artist/5qRSs6mvI17zrkJpOHkCoM",
            "tiktok": "https://www.tiktok.com/@ikon_tiktok"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802467/80246729.jpg"
    },
    "AKMU": {
        "names": {
            "KO": "악뮤",
            "EN": "AKMU"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCIcXK1CI8URMIqNO_1cehiQ",
            "twitter": "https://twitter.com/official_akmu",
            "fancafe": "https://cafe.daum.net/YGAKMU",
            "spotify": "https://open.spotify.com/artist/6OwKE9Ez6ALxpTaKcT5ayv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801414/80141499.jpg"
    },
    "YeeunAhn": {
        "names": {
            "KO": "안예은",
            "EN": "Yeeun Ahn"
        },
        "sns": {
            "instagram": "https://www.instagram.com/56yenyen56/",
            "twitter": "https://twitter.com/56yenyen56",
            "spotify": "https://open.spotify.com/artist/0qQQYIK5Sxnzt72fGyTcvs",
            "tiktok": "https://www.tiktok.com/@56yenyen56"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802574/80257479.jpg"
    },
    "AleXa": {
        "names": {
            "KO": "알렉사",
            "EN": "AleXa"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCWWzmRMh6BPcEt46XlTyp1w",
            "twitter": "https://twitter.com/AleXa_ZB",
            "instagram": "https://www.instagram.com/alexa_zbofficial/",
            "spotify": "https://open.spotify.com/artist/4jCGRzuZkwo8CxboiANMEU",
            "tiktok": "https://www.tiktok.com/@alexa_zbofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803354/80335418.jpg"
    },
    "RM": {
        "names": {
            "KO": "알엠",
            "EN": "RM"
        },
        "sns": {
            "instagram": "https://www.instagram.com/rkive/",
            "spotify": "https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801808/80180881.jpg"
    },
    "ASHISLAND": {
        "names": {
            "KO": "애쉬 아일랜드",
            "EN": "ASH ISLAND"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ash.island/",
            "spotify": "https://open.spotify.com/artist/7IEhlwWQA7pCkEvzwwHehE"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200542/20054240.jpg"
    },
    "ANDY": {
        "names": {
            "KO": "앤디",
            "EN": "ANDY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/andyofficial___/",
            "twitter": "https://twitter.com/ANDY__official",
            "spotify": "https://open.spotify.com/artist/7yFkqOVNnOGsGHRAir1kO3"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/16/1633.jpg"
    },
    "YangDaIl": {
        "names": {
            "KO": "양다일",
            "EN": "Yang Da Il"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC7hJAdXkTLTjEPNjYK5wzbg",
            "instagram": "https://www.instagram.com/yangdail/",
            "spotify": "https://open.spotify.com/artist/5DnjOSzLCfn4hDbLECq8pt"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801107/80110772.jpg"
    },
    "YANGYOSEOP": {
        "names": {
            "KO": "양요섭",
            "EN": "YANG YOSEOP"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yysbeast/",
            "spotify": "https://open.spotify.com/artist/1fwMtpwCEJovQuyxSuHcAd"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800603/80060356.jpg"
    },
    "YangJieun": {
        "names": {
            "KO": "양지은",
            "EN": "Yang Jieun"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCqGa3kiLPy6vlz6RH6Zg9nw",
            "instagram": "https://www.instagram.com/jieun.y_j/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/121198/12119858.jpg"
    },
    "YoungB": {
        "names": {
            "KO": "양홍원",
            "EN": "YoungB"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yanghongwon/",
            "spotify": "https://open.spotify.com/artist/1SsVqqC31h54Hg08g7uQhM"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200351/20035134.jpg"
    },
    "AgustD": {
        "names": {
            "KO": "어거스트 디",
            "EN": "Agust D"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/5RmQ8k4l3HZ8JoPb4mNsML"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801808/80180882.jpg"
    },
    "UglyDuck": {
        "names": {
            "KO": "어글리 덕",
            "EN": "Ugly Duck"
        },
        "sns": {
            "twitter": "https://twitter.com/uglyduck062",
            "instagram": "https://www.instagram.com/uglyduck062/",
            "spotify": "https://open.spotify.com/artist/0Qr4St9aCOLu41Nt5QZIz1",
            "tiktok": "https://www.tiktok.com/@ughhhducka"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800198/80019882.jpg"
    },
    "UrbanZakapa": {
        "names": {
            "KO": "어반 자카파",
            "EN": "Urban Zakapa"
        },
        "sns": {
            "twitter": "https://twitter.com/urbanzakapa",
            "spotify": "https://open.spotify.com/artist/1dOMFM5wDNsENQQW0nl0K8"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800576/80057634.jpg"
    },
    "AWEEK": {
        "names": {
            "KO": "어위크",
            "EN": "AWEEK"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCcbRdMw7-IQ4NjlWNsZeSIA",
            "twitter": "https://twitter.com/aweek_official",
            "instagram": "https://www.instagram.com/aweek7official/",
            "fancafe": "http://cafe.daum.net/Aweek7",
            "spotify": "https://open.spotify.com/artist/5TGmLB3rkGJE1uPtYBFGi0"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200754/20075400.jpg"
    },
    "UNEDUCATEDKID": {
        "names": {
            "KO": "언에듀케이티드 키드",
            "EN": "UNEDUCATED KID"
        },
        "sns": {
            "instagram": "https://www.instagram.com/uneducatedkid/",
            "tiktok": "https://www.tiktok.com/@\\\\N"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200467/20046704.jpg"
    },
    "UP10TION": {
        "names": {
            "KO": "업텐션",
            "EN": "UP10TION"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCPJ4MfslU2tjw1a8X-0VuVw",
            "instagram": "https://www.instagram.com/u10t_official/",
            "twitter": "https://twitter.com/UP10TION",
            "fancafe": "http://cafe.daum.net/up10tion",
            "spotify": "https://open.spotify.com/artist/2LjaeuGS0ubYXZfNihGp9y",
            "tiktok": "https://www.tiktok.com/@up10tion__"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802459/80245982.jpg"
    },
    "EddyKim": {
        "names": {
            "KO": "에디킴",
            "EN": "Eddy Kim"
        },
        "sns": {
            "twitter": "https://twitter.com/soulquaker",
            "instagram": "https://www.instagram.com/soulquaker_/",
            "spotify": "https://open.spotify.com/artist/1sVSMPPNMMSZ7cQNfbvMOe"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800862/80086277.jpg"
    },
    "EricNam": {
        "names": {
            "KO": "에릭남",
            "EN": "Eric Nam"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCPuVYvsthxkc52kNYnEHUcA",
            "twitter": "https://twitter.com/ericnamofficial",
            "instagram": "https://www.instagram.com/ericnam/",
            "fancafe": "http://cafe.daum.net/ericnamofficial",
            "spotify": "https://open.spotify.com/artist/2FLqlgckDKdmpBrvLAT5BM",
            "tiktok": "https://www.tiktok.com/@ericnam"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801143/80114337.jpg"
    },
    "EVERGLOW": {
        "names": {
            "KO": "에버글로우",
            "EN": "EVERGLOW"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCVXzBnzP5i5W-3snrxu8kfg",
            "twitter": "https://twitter.com/EVERGLOW_twt",
            "instagram": "https://www.instagram.com/official_everglow/",
            "fancafe": "http://cafe.daum.net/EVERGLOW",
            "spotify": "https://open.spotify.com/artist/3ZZzT0naD25RhY2uZvIKkJ",
            "tiktok": "https://www.tiktok.com/@everglowofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200763/20076399.jpg"
    },
    "S.I.S": {
        "names": {
            "KO": "에스아이에스",
            "EN": "S.I.S"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCD472MQkXYn_fE8r8O3Xt_w",
            "instagram": "https://www.instagram.com/sis.xxent/",
            "twitter": "https://twitter.com/SIS_twt",
            "fancafe": "http://cafe.daum.net/sis.official",
            "spotify": "https://open.spotify.com/artist/3UIi3l1xii1VXVjKpVrhXz"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802891/80289193.jpg"
    },
    "SF9": {
        "names": {
            "KO": "에스에프나인",
            "EN": "SF9"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8HNshpReWjQv1WpwzhPHjA",
            "instagram": "https://www.instagram.com/sf9official/",
            "twitter": "https://twitter.com/SF9official",
            "fancafe": "http://cafe.daum.net/SF9",
            "spotify": "https://open.spotify.com/artist/7LOmc7gyMVMOWF8qwEdn2X",
            "tiktok": "https://www.tiktok.com/@sf9official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802690/80269064.jpg"
    },
    "SGWANNABE": {
        "names": {
            "KO": "에스지 워너비",
            "EN": "SG WANNABE"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/2c3IakpImjWyeXNvyyGsdn"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/653/65348.jpg"
    },
    "aespa": {
        "names": {
            "KO": "에스파",
            "EN": "aespa"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC9GtSLeksfK4yuJ_g1lgQbg",
            "instagram": "https://www.instagram.com/aespa_official/",
            "twitter": "https://twitter.com/aespa_Official",
            "spotify": "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
            "tiktok": "https://www.tiktok.com/@aespa_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803473/80347326.jpg"
    },
    "AB6IX": {
        "names": {
            "KO": "에이비식스",
            "EN": "AB6IX"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCwytna6i1rFCt13a3Qvuk-A",
            "twitter": "https://twitter.com/AB6IX/",
            "instagram": "https://www.instagram.com/ab6ix_official/",
            "fancafe": "http://cafe.daum.net/AB6IX",
            "spotify": "https://open.spotify.com/artist/4y0wFJ5jmCUNRLZfsw1I7g",
            "tiktok": "https://www.tiktok.com/@ab6ix.official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803306/80330601.jpg"
    },
    "A.C.E": {
        "names": {
            "KO": "에이스",
            "EN": "A.C.E"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCHs6VoM3HaRxaRlnvdtzDZQ",
            "instagram": "https://www.instagram.com/official_a.c.e7/",
            "twitter": "https://twitter.com/official_ACE7",
            "fancafe": "http://cafe.daum.net/A.C.E-0523",
            "spotify": "https://open.spotify.com/artist/25KT93FeotUTHC1dbLasxi",
            "tiktok": "https://www.tiktok.com/@officialace7"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802841/80284148.jpg"
    },
    "AOA": {
        "names": {
            "KO": "에이오에이",
            "EN": "AOA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCHMMStnbsv13tXigCkW_sBQ",
            "instagram": "https://www.instagram.com/official_team_aoa/",
            "fancafe": "http://cafe.daum.net/aceofangels",
            "spotify": "https://open.spotify.com/artist/54gWVQFHf8IIqbjxAoOarN"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801326/80132659.jpg"
    },
    "ATBO": {
        "names": {
            "KO": "에이티비오",
            "EN": "ATBO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCZeIyD0qf91yYwNiyIquSTg",
            "instagram": "https://www.instagram.com/atboground/",
            "twitter": "https://twitter.com/ATBO_members",
            "spotify": "https://open.spotify.com/artist/3bwO3gNZVmHwaBttv739g7"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201645/20164507.jpg"
    },
    "ATEEZ": {
        "names": {
            "KO": "에이티즈",
            "EN": "ATEEZ"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC2e4Ukj5Pfr7cb3KpJAFBdQ",
            "instagram": "https://www.instagram.com/ateez_official_/",
            "twitter": "https://twitter.com/ATEEZofficial",
            "fancafe": "http://cafe.daum.net/ATEEZ",
            "spotify": "https://open.spotify.com/artist/68KmkJeZGfwe1OUaivBa2L",
            "tiktok": "https://www.tiktok.com/@ateez_official_"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200671/20067194.jpg"
    },
    "APRIL": {
        "names": {
            "KO": "에이프릴",
            "EN": "APRIL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCzd-QY2q6hFyNb_bn9vtWQw",
            "twitter": "https://twitter.com/APRIL_DSPmedia",
            "spotify": "https://open.spotify.com/artist/4cJ99wTjC60pXcfyISL9fa"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802441/80244185.jpg"
    },
    "Apink": {
        "names": {
            "KO": "에이핑크",
            "EN": "Apink"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCmW1Pq56lA-k-GWpX1z8WPg",
            "instagram": "https://www.instagram.com/official.apink2011/",
            "twitter": "https://twitter.com/Apink_2011",
            "fancafe": "http://cafe.daum.net/apink",
            "spotify": "https://open.spotify.com/artist/2uWcrwgWmZcQc3IPBs3tfU",
            "tiktok": "https://www.tiktok.com/@official_apink2011"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800979/80097978.jpg"
    },
    "Ailee": {
        "names": {
            "KO": "에일리",
            "EN": "Ailee"
        },
        "sns": {
            "instagram": "https://www.instagram.com/aileeonline/",
            "twitter": "https://twitter.com/itzailee",
            "spotify": "https://open.spotify.com/artist/3uGFTJ7JMllvhgGpumieHF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801207/80120704.jpg"
    },
    "fx": {
        "names": {
            "KO": "에프엑스",
            "EN": "f(x)"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC6qbHF5Aql0EbXn52P7ofXA",
            "instagram": "https://www.instagram.com/fx.official/",
            "spotify": "https://open.spotify.com/artist/3wRA5UYoo08BBKJnzyKkpF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800592/80059218.jpg"
    },
    "FTISLAND": {
        "names": {
            "KO": "에프티아일랜드",
            "EN": "FTISLAND"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCi00aT1kuoR7QNa45Xnwd7Q",
            "fancafe": "http://cafe.daum.net/fti5",
            "spotify": "https://open.spotify.com/artist/6KhH771vq2X2Aom91nNzpZ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800245/80024578.jpg"
    },
    "EPISODE": {
        "names": {
            "KO": "에피소드",
            "EN": "EPISODE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-ptCt7pUfUAhTlu2HOcdwg",
            "instagram": "https://www.instagram.com/we_make_episode/",
            "twitter": "https://twitter.com/EPISODE_twt",
            "spotify": "https://open.spotify.com/artist/6XAN0pPRqTQv4xZAdHNR6Y"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201012/20101214.jpg"
    },
    "EpitoneProject": {
        "names": {
            "KO": "에피톤 프로젝트",
            "EN": "Epitone Project"
        },
        "sns": {
            "instagram": "https://www.instagram.com/epitone.project/",
            "twitter": "https://twitter.com/epitoneproject",
            "spotify": "https://open.spotify.com/artist/0RLe3YEakXpt0FEXyFtwgN"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800211/80021125.jpg"
    },
    "EPIKHIGH": {
        "names": {
            "KO": "에픽하이",
            "EN": "EPIK HIGH"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCTcEu0jaf3DrsTjnGwwvsvA",
            "spotify": "https://open.spotify.com/artist/5snNHNlYT2UrtZo5HCJkiw",
            "tiktok": "https://www.tiktok.com/@epikhighishere"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/652/65269.jpg"
    },
    "EXO": {
        "names": {
            "KO": "엑소",
            "EN": "EXO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCzCedBCSSltI1TFd3bKyN6g",
            "instagram": "https://www.instagram.com/weareone.exo/",
            "twitter": "https://twitter.com/weareoneEXO",
            "spotify": "https://open.spotify.com/artist/3cjEqqelV9zb4BYE3qDQ4O"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801559/80155940.jpg"
    },
    "EXO-CBX": {
        "names": {
            "KO": "엑소-첸백시",
            "EN": "EXO-CBX"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/3Lz3vEN23Fw0hIelrYEzUD"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200276/20027628.jpg"
    },
    "XdinaryHeroes": {
        "names": {
            "KO": "엑스디너리 히어로즈",
            "EN": "Xdinary Heroes"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCO9GhtdQcCRf67GIdSQ0HNQ",
            "instagram": "https://www.instagram.com/xdinaryheroes_official/",
            "twitter": "https://twitter.com/XH_official",
            "spotify": "https://open.spotify.com/artist/5FgP85u2BR2WFWhMz959es"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803591/80359161.jpg"
    },
    "X1": {
        "names": {
            "KO": "엑스원",
            "EN": "X1"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCboVqbN79qGtz45u_7L8hOA",
            "instagram": "https://www.instagram.com/x1official101/",
            "twitter": "https://twitter.com/x1official101",
            "fancafe": "http://cafe.daum.net/X1official",
            "spotify": "https://open.spotify.com/artist/6C4irZ60X8G7UimMRQiCcg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200898/20089818.jpg"
    },
    "NMIXX": {
        "names": {
            "KO": "엔믹스",
            "EN": "NMIXX"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnUAyD4t2LkvW68YrDh7fDg",
            "instagram": "https://www.instagram.com/nmixx_official/",
            "twitter": "https://twitter.com/NMIXX_official",
            "spotify": "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803656/80365655.jpg"
    },
    "NCT": {
        "names": {
            "KO": "엔시티",
            "EN": "NCT"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCwgtORdDtUKhpjE1VBv6XfA",
            "instagram": "https://www.instagram.com/nct/",
            "twitter": "https://twitter.com/NCTsmtown",
            "spotify": "https://open.spotify.com/artist/48eO052eSDcn8aTxiv6QaG",
            "tiktok": "https://www.tiktok.com/@official_nct"
        },
        "imgUrl": ""
    },
    "NCT127": {
        "names": {
            "KO": "엔시티 127",
            "EN": "NCT 127"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCk2E0dbAyEJWnrN2bbQOcbg",
            "instagram": "https://www.instagram.com/nct127/",
            "twitter": "https://twitter.com/NCTsmtown_127",
            "spotify": "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802639/80263956.jpg"
    },
    "NCTDREAM": {
        "names": {
            "KO": "엔시티 드림",
            "EN": "NCT DREAM"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCXURHJRGr4-EB3l87kcbElw",
            "instagram": "https://www.instagram.com/nct_dream/",
            "twitter": "https://twitter.com/NCTsmtown_DREAM",
            "spotify": "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802666/80266679.jpg"
    },
    "NCTU": {
        "names": {
            "KO": "엔시티 유",
            "EN": "NCT U"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/3paGCCtX1Xr4Gx53mSeZuQ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802591/80259109.jpg"
    },
    "N.flying": {
        "names": {
            "KO": "엔플라잉",
            "EN": "N.flying"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8vm0EzlH9mRHwnTLILpQjQ",
            "instagram": "https://www.instagram.com/letsroll_nf/",
            "twitter": "https://twitter.com/NFlyingofficial",
            "fancafe": "http://cafe.daum.net/N.Flying",
            "spotify": "https://open.spotify.com/artist/2ZmXexIJAD7PgABrj0qQRb",
            "tiktok": "https://www.tiktok.com/@nflyingofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802303/80230321.jpg"
    },
    "ENHYPEN": {
        "names": {
            "KO": "엔하이픈",
            "EN": "ENHYPEN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCArLZtok93cO5R9RI4_Y5Jw",
            "twitter": "https://twitter.com/ENHYPEN_members",
            "instagram": "https://www.instagram.com/enhypen/",
            "spotify": "https://open.spotify.com/artist/5t5FqBwTcgKTaWmfEbwQY9",
            "tiktok": "https://www.tiktok.com/@enhypen"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803472/80347259.jpg"
    },
    "L": {
        "names": {
            "KO": "엘",
            "EN": "L"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCp0m_0YNCXEVNnvSCO8SJnw",
            "instagram": "https://www.instagram.com/kim_msl/",
            "twitter": "https://twitter.com/Infinitelkim"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800705/80070521.jpg"
    },
    "ELAST": {
        "names": {
            "KO": "엘라스트",
            "EN": "E`LAST"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCb3jRPdjLnHGYThluJzI2kw",
            "instagram": "https://www.instagram.com/elast_official/",
            "twitter": "https://twitter.com/ELASTofficial",
            "fancafe": "http://cafe.daum.net/EBOYZ",
            "spotify": "https://open.spotify.com/artist/0NztgA9b1KEJLjLVqMwd9y",
            "tiktok": "https://www.tiktok.com/@elast.official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201091/20109138.jpg"
    },
    "ELO": {
        "names": {
            "KO": "엘로",
            "EN": "ELO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/eloinvvd/",
            "twitter": "https://twitter.com/eloinvvd",
            "spotify": "https://open.spotify.com/artist/15KDb2KpZRvX1updtyinK1"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801515/80151596.jpg"
    },
    "ELRIS": {
        "names": {
            "KO": "엘리스",
            "EN": "ELRIS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-MRBhuTep3dzojQd5RvoFA",
            "instagram": "https://www.instagram.com/hunus_elris/",
            "twitter": "https://twitter.com/hunus_elris",
            "fancafe": "http://cafe.daum.net/elris.official",
            "spotify": "https://open.spotify.com/artist/1mgzY8CsK8lyJy96tT8bV5",
            "tiktok": "https://www.tiktok.com/@elris_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802845/80284542.jpg"
    },
    "ELKIE": {
        "names": {
            "KO": "엘키",
            "EN": "ELKIE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/chongtingyanelkie/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802574/80257480.jpg"
    },
    "AMBER": {
        "names": {
            "KO": "엠버",
            "EN": "AMBER"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCD-aVzvsQsFizfMSuUSN9cA",
            "instagram": "https://www.instagram.com/amberliu/",
            "spotify": "https://open.spotify.com/artist/6vPzAqZDXQgLTEn8pjp4jY",
            "tiktok": "https://www.tiktok.com/@amberliu"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800607/80060786.jpg"
    },
    "MBLAQ": {
        "names": {
            "KO": "엠블랙",
            "EN": "MBLAQ"
        },
        "sns": {
            "fancafe": "http://cafe.daum.net/Mblaq",
            "spotify": "https://open.spotify.com/artist/14f1WN9TUDVBK4sHUStmLG"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800602/80060298.jpg"
    },
    "M.CTheMax": {
        "names": {
            "KO": "엠씨더맥스",
            "EN": "M.C The Max"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-jYMC8vluz3vA-TO2cc4fA",
            "spotify": "https://open.spotify.com/artist/3MaRWfwKpbYnkYHC5gRKYo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/325/32585.jpg"
    },
    "MCND": {
        "names": {
            "KO": "엠씨엔디",
            "EN": "MCND"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCNC_wxtoMCuvRVQzpbHPaZw",
            "twitter": "https://twitter.com/McndOfficial_",
            "instagram": "https://www.instagram.com/mcnd_official/",
            "fancafe": "http://cafe.daum.net/McndOfficial",
            "spotify": "https://open.spotify.com/artist/59dDRtMe8DILtibke8FWLK",
            "tiktok": "https://www.tiktok.com/@mcndofficial_"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200990/20099090.jpg"
    },
    "MXM": {
        "names": {
            "KO": "엠엑스엠",
            "EN": "MXM"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCv1JYvsu-__rGWRE2ueYTcw",
            "instagram": "https://www.instagram.com/bnmboysofficial/",
            "twitter": "https://twitter.com/bnmboysofficial",
            "fancafe": "http://cafe.daum.net/BRANDNEWBOYS",
            "spotify": "https://open.spotify.com/artist/2BXth1dnMzlCfJP9EiCLnv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802880/80288099.jpg"
    },
    "GFRIEND": {
        "names": {
            "KO": "여자친구",
            "EN": "GFRIEND"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCRDd3x33kfF0IW6g2MRUkRw",
            "instagram": "https://www.instagram.com/gfriendofficial/",
            "twitter": "https://twitter.com/GFRDofficial",
            "fancafe": "http://cafe.daum.net/gfrdofficial",
            "spotify": "https://open.spotify.com/artist/0qlWcS66ohOIi0M8JZwPft",
            "tiktok": "https://www.tiktok.com/@official_gfriend"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802165/80216536.jpg"
    },
    "YUMDDA": {
        "names": {
            "KO": "염따",
            "EN": "YUMDDA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UChg_sGDFk1qZf5N97GC8s6w",
            "instagram": "https://www.instagram.com/yumdda/",
            "spotify": "https://open.spotify.com/artist/0su5mZ6qhvOUhz7ckEx8rR"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800202/80020206.jpg"
    },
    "YOUNGJAE": {
        "names": {
            "KO": "영재",
            "EN": "Youngjae"
        },
        "sns": {
            "instagram": "https://www.instagram.com/333cyj333/",
            "twitter": "https://twitter.com/GOTYJ_Ars_Vita",
            "spotify": "https://open.spotify.com/artist/5qUAtC3NwSLYme4JqjlGfQ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801783/80178395.jpg"
    },
    "YoungTak": {
        "names": {
            "KO": "영탁",
            "EN": "YoungTak"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCH7JoVNZFpo1pOzZH-t5uew",
            "instagram": "https://www.instagram.com/zerotak2/",
            "spotify": "https://open.spotify.com/artist/0qDHjPB7TJPxYaQ0CWMEU4",
            "tiktok": "https://www.tiktok.com/@zerotak2"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802596/80259668.jpg"
    },
    "YERIN": {
        "names": {
            "KO": "예린",
            "EN": "YERIN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8ApPB1oJZSBvGi-bqSPAmg",
            "instagram": "https://www.instagram.com/every__nn/",
            "twitter": "https://twitter.com/YERIN_OFFICIAL_",
            "spotify": "https://open.spotify.com/artist/0K75iH0Ts1A7ZbLjvKLR3d"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802294/80229498.jpg"
    },
    "YESUNG": {
        "names": {
            "KO": "예성",
            "EN": "YESUNG"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yesung1106/",
            "twitter": "https://twitter.com/shfly3424",
            "spotify": "https://open.spotify.com/artist/4hyF8Vtc73RYJr3RgTE2Zf"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800135/80013537.jpg"
    },
    "OhMyGirl": {
        "names": {
            "KO": "오마이걸",
            "EN": "Oh My Girl"
        },
        "sns": {
            "instagram": "https://www.instagram.com/wm_ohmygirl/",
            "twitter": "https://twitter.com/WM_OHMYGIRL",
            "fancafe": "http://cafe.daum.net/-ohmygirl",
            "spotify": "https://open.spotify.com/artist/2019zR22qK2RBvCqtudBaI",
            "tiktok": "https://www.tiktok.com/@wm_ohmygirl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802269/80226913.jpg"
    },
    "OMEGAX": {
        "names": {
            "KO": "오메가엑스",
            "EN": "OMEGA X"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCHJsN50Lr5fyzokVnjhvZ8g",
            "twitter": "https://twitter.com/OmegaX_members",
            "instagram": "https://www.instagram.com/omegax_official/",
            "fancafe": "https://cafe.daum.net/OmegaX",
            "spotify": "https://open.spotify.com/artist/2FJYWlqgtoiBtXpOy9GGIF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201375/20137510.jpg"
    },
    "OsshunGum": {
        "names": {
            "KO": "오션검",
            "EN": "Osshun Gum"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/4F4rHRjTw15zhEFKvnLs7q"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200351/20035135.jpg"
    },
    "O.WHEN": {
        "names": {
            "KO": "오왠",
            "EN": "O.WHEN"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/7f5OHScUwC0ZKZzma5mMxq"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200162/20016217.jpg"
    },
    "OwenOvadoz": {
        "names": {
            "KO": "오왼 오바도즈",
            "EN": "Owen Ovadoz"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/5rP0axomfqfxm0QavWTdvO"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802233/80223354.jpg"
    },
    "offonoff": {
        "names": {
            "KO": "오프온오프",
            "EN": "offonoff"
        },
        "sns": {
            "instagram": "https://www.instagram.com/realoffonoff/",
            "spotify": "https://open.spotify.com/artist/0dTj3SqwE8kPnCzyzvYzhT"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200251/20025189.jpg"
    },
    "OHHAYOUNG": {
        "names": {
            "KO": "오하영",
            "EN": "OH HAYOUNG"
        },
        "sns": {
            "instagram": "https://www.instagram.com/_ohhayoung_/",
            "twitter": "https://twitter.com/Apinkohy",
            "spotify": "https://open.spotify.com/artist/3mTOjpZV1L0iW54wn90H8K"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800984/80098467.jpg"
    },
    "OHHYUK": {
        "names": {
            "KO": "오혁",
            "EN": "Oh Hyuk"
        },
        "sns": {
            "instagram": "https://www.instagram.com/hyukoh2000/",
            "spotify": "https://open.spotify.com/artist/68TCVp5t1Dxi2TvNuYoYK0"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801815/80181567.jpg"
    },
    "OKDAL": {
        "names": {
            "KO": "옥상달빛",
            "EN": "OKDAL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCCXklDmHiNUXYPuwNSKz4EQ",
            "instagram": "https://www.instagram.com/okdal_official/",
            "twitter": "https://twitter.com/okdal_msb",
            "spotify": "https://open.spotify.com/artist/43qbEc59aqLydrvuWsrNoE",
            "tiktok": "https://www.tiktok.com/@1o"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800637/80063748.jpg"
    },
    "OakJooHyun": {
        "names": {
            "KO": "옥주현",
            "EN": "Oak Joo Hyun"
        },
        "sns": {
            "instagram": "https://www.instagram.com/o._.julia/",
            "fancafe": "http://cafe.daum.net/joohyun486",
            "spotify": "https://open.spotify.com/artist/22GsBXoNH88NIr7Rl8k7oz"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/17/1754.jpg"
    },
    "OnlyOneOf": {
        "names": {
            "KO": "온리원오브",
            "EN": "OnlyOneOf"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCkTMO7QLYmMzDP3dGuerG8A",
            "twitter": "https://twitter.com/OnlyOneOf_twt",
            "instagram": "https://www.instagram.com/onlyoneofofficial/",
            "fancafe": "http://cafe.daum.net/OnlyOneOfofficial",
            "spotify": "https://open.spotify.com/artist/0iQGSzpJ0G0lsugv8jsJHd",
            "tiktok": "https://www.tiktok.com/@onlyoneofofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200842/20084212.jpg"
    },
    "ONF": {
        "names": {
            "KO": "온앤오프",
            "EN": "ONF"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCgdj5bL5_Il2tqsQ7J4k6zw",
            "instagram": "https://www.instagram.com/wm_onoff/",
            "twitter": "https://twitter.com/WM_ONOFF",
            "fancafe": "http://cafe.daum.net/-onoff",
            "spotify": "https://open.spotify.com/artist/0eEhOgZ2x6kv8kLz77WO7b",
            "tiktok": "https://www.tiktok.com/@official.onf"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802883/80288337.jpg"
    },
    "ONEW": {
        "names": {
            "KO": "온유",
            "EN": "ONEW"
        },
        "sns": {
            "instagram": "https://www.instagram.com/dlstmxkakwldrl/",
            "spotify": "https://open.spotify.com/artist/7sZ5ipSoboWdqXkdj6AXHo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800442/80044241.jpg"
    },
    "Olltii": {
        "names": {
            "KO": "올티",
            "EN": "Olltii"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCwbAFhVvjTEELLovM10H_zw",
            "twitter": "https://twitter.com/olltii",
            "instagram": "https://www.instagram.com/olltii/",
            "spotify": "https://open.spotify.com/artist/1l1VfoWjli9N3MJH2tAWCA",
            "tiktok": "https://www.tiktok.com/@011711_olltii"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801115/80111587.jpg"
    },
    "ONGSEONGWU": {
        "names": {
            "KO": "옹성우",
            "EN": "ONG SEONG WU"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCS7QXPJhEOvJfH8ZxMBGrIQ",
            "instagram": "https://www.instagram.com/osw_onge/",
            "twitter": "https://twitter.com/officialtwt_OSW",
            "fancafe": "http://cafe.daum.net/ongseongwu825",
            "spotify": "https://open.spotify.com/artist/01APAUkFb3XB5exrmi8tkQ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288428.jpg"
    },
    "YUQI": {
        "names": {
            "KO": "우기",
            "EN": "YUQI"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yuqisong.923/",
            "spotify": "https://open.spotify.com/artist/3NvORemwM8BxfymFL8uR7p"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803073/80307308.jpg"
    },
    "woodiegochild": {
        "names": {
            "KO": "우디고차일드",
            "EN": "Woodie Gochild"
        },
        "sns": {
            "instagram": "https://www.instagram.com/woodie_gochild/",
            "twitter": "https://twitter.com/woodiegochild3",
            "spotify": "https://open.spotify.com/artist/6iLGJqxVgxxWsJe5bW4dxt",
            "tiktok": "https://www.tiktok.com/@woodiegochild_96"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200421/20042155.jpg"
    },
    "wooah": {
        "names": {
            "KO": "우아!",
            "EN": "woo!ah!"
        },
        "sns": {
            "instagram": "https://www.instagram.com/wooah_nv/",
            "twitter": "https://twitter.com/wooah_nv",
            "fancafe": "http://cafe.daum.net/Wooah",
            "spotify": "https://open.spotify.com/artist/7mgY992t7YTx6UELsoIMRa",
            "tiktok": "https://www.tiktok.com/@wooah_nv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201078/20107829.jpg"
    },
    "Woo": {
        "names": {
            "KO": "우원재",
            "EN": "Woo"
        },
        "sns": {
            "instagram": "https://www.instagram.com/munchinthepool/",
            "spotify": "https://open.spotify.com/artist/5a8EJtOEbUJDF4RX3mKK02"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200421/20042154.jpg"
    },
    "WJSN": {
        "names": {
            "KO": "우주소녀",
            "EN": "WJSN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCVaIiqzfKQsi7Qw4-X8TmmA",
            "instagram": "https://www.instagram.com/wjsn_cosmic/",
            "twitter": "https://twitter.com/WJSN_Cosmic",
            "fancafe": "http://cafe.daum.net/WJSNcosmic",
            "spotify": "https://open.spotify.com/artist/6hhqsQZhtp9hfaZhSd0VSD",
            "tiktok": "https://www.tiktok.com/@official_wjsn"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802570/80257032.jpg"
    },
    "WOOZI": {
        "names": {
            "KO": "우지",
            "EN": "WOOZI"
        },
        "sns": {
            "instagram": "https://www.instagram.com/woozi_universefactory/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802323/80232301.jpg"
    },
    "WOOJINYOUNG": {
        "names": {
            "KO": "우진영",
            "EN": "WOO JIN YOUNG"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802861/80286171.jpg"
    },
    "Wutan": {
        "names": {
            "KO": "우탄",
            "EN": "Wutan"
        },
        "sns": {
            "instagram": "https://www.instagram.com/wutan_vmc/",
            "twitter": "https://twitter.com/WUTAN_JP"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801013/80101352.jpg"
    },
    "OOHYO": {
        "names": {
            "KO": "우효",
            "EN": "OOHYO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/oohyo_official/",
            "spotify": "https://open.spotify.com/artist/50Zu2bK9y5UAtD0jcqk5VX"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801906/80190647.jpg"
    },
    "WannaOne": {
        "names": {
            "KO": "워너원",
            "EN": "Wanna One"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC3stmiOTQdbzlRK1QOVZQ-g",
            "instagram": "https://www.instagram.com/wannaone.official/",
            "twitter": "https://twitter.com/WannaOne_twt",
            "fancafe": "http://cafe.daum.net/WannaOneOfficial",
            "spotify": "https://open.spotify.com/artist/2CvaqAMMsX576VBehaJ0Wx"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288421.jpg"
    },
    "ONE": {
        "names": {
            "KO": "원",
            "EN": "ONE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/onlyoneprivate/",
            "spotify": "https://open.spotify.com/artist/36Hd8M3GV2FLpHUEDH6bCz"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802181/80218177.jpg"
    },
    "WonderGirls": {
        "names": {
            "KO": "원더걸스",
            "EN": "Wonder Girls"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCTE8ueKNA54RcO6MgXif2Tg",
            "twitter": "https://twitter.com/wondergirls",
            "spotify": "https://open.spotify.com/artist/3Cv2vi3WTl8VZOTdrBkKdM"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800221/80022182.jpg"
    },
    "1THE9": {
        "names": {
            "ETC": "1THE9",
            "KO": "원더나인"
        },
        "sns": {
            "instagram": "https://www.instagram.com/official__1the9/",
            "twitter": "https://twitter.com/official__1the9",
            "spotify": "https://open.spotify.com/artist/6ZZafCTzyk1yjqEES63cMm"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803294/80329492.jpg"
    },
    "ONEUS": {
        "names": {
            "KO": "원어스",
            "EN": "ONEUS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCWTYf4xModfNsyq2NUYjF5g",
            "instagram": "https://www.instagram.com/official_oneus/",
            "twitter": "https://www.twitter.com/official_ONEUS",
            "fancafe": "http://cafe.daum.net/RBWBOYZ",
            "spotify": "https://open.spotify.com/artist/3CVYSpM7nfHFG5qCTW7Ht9",
            "tiktok": "https://www.tiktok.com/@rbw_oneus"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200663/20066320.jpg"
    },
    "ONEWE": {
        "names": {
            "KO": "원위",
            "EN": "ONEWE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCj-dtq6jHfj4_fufifPzMEQ",
            "instagram": "https://www.instagram.com/official_onewe/",
            "twitter": "https://www.twitter.com/official_ONEWE",
            "fancafe": "http://cafe.daum.net/makeasound0094",
            "spotify": "https://open.spotify.com/artist/4D9foUQxTrsS0w2BeyCD16",
            "tiktok": "https://www.tiktok.com/@rbw_onewe"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803209/80320974.jpg"
    },
    "1TEAM": {
        "names": {
            "ETC": "1TEAM",
            "KO": "원팀"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCuUdOz_f9ZU4diWkppQvP9w",
            "twitter": "https://www.twitter.com/1team_official",
            "instagram": "https://www.instagram.com/official_1team/",
            "fancafe": "http://cafe.daum.net/1TEAM-OFFICIAL",
            "spotify": "https://open.spotify.com/artist/3u9xBa2fe8b9jPf5JYFRH3"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803293/80329320.jpg"
    },
    "WONHO": {
        "names": {
            "KO": "원호",
            "EN": "WONHO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnSNrN9e2UlPhLVHS60akuA",
            "twitter": "https://twitter.com/official__wonho",
            "instagram": "https://www.instagram.com/iwonhoyou/",
            "fancafe": "http://cafe.daum.net/official--wonho",
            "spotify": "https://open.spotify.com/artist/6pC3vnUgNVITdYMMXefi6D",
            "tiktok": "https://www.tiktok.com/@official_wonho"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802197/80219706.jpg"
    },
    "WayV": {
        "names": {
            "KO": "웨이션브이",
            "EN": "WayV"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-ZHt5Zgadfx-B1CM63Lqew",
            "twitter": "https://twitter.com/WayV_official",
            "instagram": "https://www.instagram.com/wayvofficial/",
            "spotify": "https://open.spotify.com/artist/1qBsABYUrxg9afpMtyoFKz",
            "tiktok": "https://www.tiktok.com/@official_wayv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803256/80325652.jpg"
    },
    "WENDY": {
        "names": {
            "KO": "웬디",
            "EN": "WENDY"
        },
        "sns": {
            "instagram": "https://instagram.com/todayis_wendy/",
            "spotify": "https://open.spotify.com/artist/0FRUZvZNPzM3YJMABJxf2K"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801845/80184597.jpg"
    },
    "WINNER": {
        "names": {
            "KO": "위너",
            "EN": "WINNER"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCayQxFAoFCvGariuQCtHRGQ",
            "instagram": "https://www.instagram.com/WINNERCITY/",
            "twitter": "https://twitter.com/yginnercircle",
            "fancafe": "http://cafe.daum.net/YGWINNER",
            "spotify": "https://open.spotify.com/artist/5DuzBeOgFwViFcv00Q5PFb",
            "tiktok": "https://www.tiktok.com/@wn_tiktok"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801948/80194890.jpg"
    },
    "WEi": {
        "names": {
            "KO": "위아이",
            "EN": "WEi"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC_sMGOWZ7FP7rsUAnQSM4HQ",
            "twitter": "https://twitter.com/WEi__Official",
            "instagram": "https://www.instagram.com/wei__official/",
            "fancafe": "http://cafe.daum.net/WEi",
            "spotify": "https://open.spotify.com/artist/7IkfFdVcI6HrRKuOO9NvX5",
            "tiktok": "https://www.tiktok.com/@wei__official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201160/20116044.jpg"
    },
    "WEINTHEZONE": {
        "names": {
            "KO": "위인더존",
            "EN": "WE IN THE ZONE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCfi8qT8tm4VYCgcqO1kERGg",
            "twitter": "https://twitter.com/WE_INTHE_ZONE",
            "spotify": "https://open.spotify.com/artist/2aCSYXdXqJNaXk99vjYnkQ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803314/80331406.jpg"
    },
    "Weeekly": {
        "names": {
            "KO": "위클리",
            "EN": "Weeekly"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC5rp2rDRSpyKNj-QLytC-tw",
            "twitter": "https://twitter.com/_Weeekly",
            "instagram": "https://www.instagram.com/_Weeekly/",
            "fancafe": "http://cafe.daum.net/Weeekly",
            "spotify": "https://open.spotify.com/artist/73B9bjqS2Z5KLXNGqXf64m",
            "tiktok": "https://www.tiktok.com/@weeekly"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201102/20110282.jpg"
    },
    "WekiMeki": {
        "names": {
            "KO": "위키미키",
            "EN": "Weki Meki"
        },
        "sns": {
            "instagram": "https://www.instagram.com/weki_meki/",
            "twitter": "https://twitter.com/WekiMeki",
            "fancafe": "http://cafe.daum.net/WekiMeki",
            "spotify": "https://open.spotify.com/artist/5LWkv2hDbDwZL3zNwZYNPx",
            "tiktok": "https://www.tiktok.com/@wm_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288478.jpg"
    },
    "Yugyeom": {
        "names": {
            "KO": "유겸",
            "EN": "Yugyeom"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yugyeom/",
            "twitter": "https://twitter.com/yugyeom",
            "spotify": "https://open.spotify.com/artist/3ohXmy1PGdB3XgzhPqQ0tY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801783/80178397.jpg"
    },
    "YOUNITE": {
        "names": {
            "KO": "유나이트",
            "EN": "YOUNITE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/younite_bnm/",
            "twitter": "https://twitter.com/YOUNITE_twt",
            "fancafe": "https://cafe.daum.net/YOUNITE",
            "spotify": "https://open.spotify.com/artist/4l4eMvpA4K7X02j08cbkNV"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803700/80370055.jpg?version=331490&d=20220725175853"
    },
    "U-Know": {
        "names": {
            "KO": "유노윤호",
            "EN": "U-Know"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yunho2154/",
            "spotify": "https://open.spotify.com/artist/4lqxrwkJ16gYkKNumLA3SL"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800011/80001101.jpg"
    },
    "YURI": {
        "names": {
            "KO": "유리",
            "EN": "YURI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCeUXR_8AOMCji1OEaVne9aQ",
            "instagram": "https://www.instagram.com/yulyulk/",
            "spotify": "https://open.spotify.com/artist/2TMRvcwsmvVhvuEbKVEbZe"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800264/80026433.jpg"
    },
    "Yubin": {
        "names": {
            "KO": "유빈",
            "EN": "Yubin"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC3zD47ZL9GpPPAkW_G6vvlw",
            "twitter": "https://twitter.com/YubinOfficial",
            "instagram": "https://www.instagram.com/iluvyub/",
            "spotify": "https://open.spotify.com/artist/3JUj7c2h5xkdOf0GJ07VWE",
            "tiktok": "https://www.tiktok.com/@iluvyub"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800269/80026956.jpg"
    },
    "YOOA": {
        "names": {
            "KO": "유아",
            "EN": "YOOA"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yoo__sha/",
            "spotify": "https://open.spotify.com/artist/4ur1jCwyNlhgd0viJkOtcQ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802269/80226922.jpg"
    },
    "UNVS": {
        "names": {
            "KO": "유엔브이에스",
            "EN": "UNVS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCCSNpijtZcS64wUBb33uKjA",
            "instagram": "https://www.instagram.com/official.unvs/",
            "twitter": "https://twitter.com/UNVS_Official",
            "fancafe": "http://cafe.daum.net/officialunvs",
            "spotify": "https://open.spotify.com/artist/026a7U6QVOMT4LRfaaNhQX",
            "tiktok": "https://www.tiktok.com/@unvsofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803387/80338741.jpg"
    },
    "YOUYOUNGJAE": {
        "names": {
            "KO": "유영재",
            "EN": "YOUYOUNGJAE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC0O6aYQjPZf0HRs9pwE9W3w",
            "twitter": "https://twitter.com/BAP_Youngjae",
            "instagram": "https://www.instagram.com/yjaybaby/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801199/80119999.jpg"
    },
    "YUJU": {
        "names": {
            "KO": "유주",
            "EN": "YUJU"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCLoxAIlQjo5Hj5XxBOJ2fHg",
            "instagram": "https://www.instagram.com/yuuzth/",
            "twitter": "https://twitter.com/konnect_YUJU",
            "spotify": "https://open.spotify.com/artist/7Bu0r4MCDX3sbhcFD5IXyx"
        },
        "imgUrl": "https://image.bugsm.co.kr/album/images/1000/40703/4070304.jpg"
    },
    "U-KISS": {
        "names": {
            "KO": "유키스",
            "EN": "U-KISS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCr4mPLMAemynP0lCB_Y2ADQ",
            "instagram": "https://www.instagram.com/ukisskorea_official/",
            "twitter": "https://twitter.com/ukisskorea",
            "fancafe": "http://cafe.daum.net/ukiss-kissme",
            "spotify": "https://open.spotify.com/artist/2GB76Lm833jVI5kLvKEB7Z"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800483/80048365.jpg"
    },
    "YookSungJae": {
        "names": {
            "KO": "육성재",
            "EN": "Yook SungJae"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yook_can_do_it/",
            "twitter": "https://twitter.com/BTOB_6SJ",
            "spotify": "https://open.spotify.com/artist/1yaQlQCA4vkEq2oyv4KNVJ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801234/80123436.jpg"
    },
    "YoonDuJun": {
        "names": {
            "KO": "윤두준",
            "EN": "YOON DU JUN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCudiCxxUQPw4fzZmU6NdyoQ",
            "instagram": "https://www.instagram.com/beeeestdjdjdj/",
            "twitter": "https://twitter.com/BeeeestDJ",
            "spotify": "https://open.spotify.com/artist/0bjyZMw6TzPhXSp2PoKXx7"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80140/8014044.jpg"
    },
    "YunDDanDDan": {
        "names": {
            "KO": "윤딴딴",
            "EN": "Yun DDanDDan"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UChnbG-BYQKXrOBb-83KO-UQ",
            "instagram": "https://www.instagram.com/yun_ddanddan/",
            "spotify": "https://open.spotify.com/artist/0fnx3yyvXH5E0UATpygzzt"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801810/80181051.jpg"
    },
    "YOONMIRAE": {
        "names": {
            "KO": "윤미래",
            "EN": "YOONMIRAE"
        },
        "sns": {
            "twitter": "https://twitter.com/Yoonmirae",
            "spotify": "https://open.spotify.com/artist/1Do4bSzfUl0KWL9r1fITu0",
            "tiktok": "https://www.tiktok.com/@yoonmirae_"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/74/7406.jpg"
    },
    "YOONA": {
        "names": {
            "KO": "윤아",
            "EN": "YOONA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8B_76tkLwQmiaJwDKFytXw",
            "instagram": "https://www.instagram.com/yoona__lim/",
            "spotify": "https://open.spotify.com/artist/6LCX99hubn8CejiUtMCyyk"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800264/80026438.jpg"
    },
    "YoonJongShin": {
        "names": {
            "KO": "윤종신",
            "EN": "Yoon Jong Shin"
        },
        "sns": {
            "instagram": "https://www.instagram.com/yoonjongshin/",
            "twitter": "https://twitter.com/melodymonthly",
            "spotify": "https://open.spotify.com/artist/0hW1muryuCdZLfjoLrUhnw"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/24/2459.jpg"
    },
    "YOONJISUNG": {
        "names": {
            "KO": "윤지성",
            "EN": "YOON JI SUNG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC0toF0jpYJUgS7jAgCNCVNw",
            "instagram": "https://www.instagram.com/_yoonj1sung_/",
            "twitter": "https://twitter.com/Official_YJS_",
            "fancafe": "http://cafe.daum.net/YJS.Official",
            "spotify": "https://open.spotify.com/artist/336NKYVCHaJbC8RrMEO8NM"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288431.jpg"
    },
    "YOUNHA": {
        "names": {
            "KO": "윤하",
            "EN": "YOUNHA"
        },
        "sns": {
            "instagram": "https://www.instagram.com/younha_holic/",
            "twitter": "https://twitter.com/younhaholic",
            "fancafe": "http://cafe.daum.net/Y-Holics",
            "spotify": "https://open.spotify.com/artist/6GwM5CHqhWXzG3l5kzRSAS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800100/80010025.jpg"
    },
    "YUNHWAY": {
        "names": {
            "KO": "윤훼이",
            "EN": "YUNHWAY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC-fmwoADQdVkGhmrTc-xJDw",
            "instagram": "https://www.instagram.com/yunhway/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200045/20004535.jpg"
    },
    "EUN-JUNG": {
        "names": {
            "KO": "은정",
            "EN": "EUN-JUNG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCccvLqqFIIMIC7OqKUe3Z8Q",
            "instagram": "https://www.instagram.com/eunjung.hahm/",
            "twitter": "https://twitter.com/taraeunjung1212"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800582/80058294.jpg"
    },
    "EUNHYUK": {
        "names": {
            "KO": "은혁",
            "EN": "EUNHYUK"
        },
        "sns": {
            "instagram": "https://www.instagram.com/eunhyuk_outfit/",
            "twitter": "https://twitter.com/AllRiseSilver",
            "spotify": "https://open.spotify.com/artist/4QRqp8zf5JtqaMk2OOU3NX"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800135/80013541.jpg"
    },
    "LEEGIKWANG": {
        "names": {
            "KO": "이기광",
            "EN": "LEEGIKWANG"
        },
        "sns": {
            "instagram": "https://www.instagram.com/gttk0000/",
            "twitter": "https://twitter.com/900_330",
            "spotify": "https://open.spotify.com/artist/3CC7p9QM4VjO62rmcaRP3z"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800603/80060358.jpg"
    },
    "LOONA": {
        "names": {
            "KO": "이달의 소녀",
            "EN": "LOONA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCOJplhB0wGQWv9OuRmMT-4g",
            "instagram": "https://www.instagram.com/loonatheworld/",
            "twitter": "https://twitter.com/loonatheworld",
            "fancafe": "http://cafe.daum.net/loonatheworld",
            "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7",
            "tiktok": "https://www.tiktok.com/@loonatheworld_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802721/80272163.jpg"
    },
    "LangLee": {
        "names": {
            "KO": "이랑",
            "EN": "Lang Lee"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCw5txL30_BBKIGNAwxye7uA",
            "instagram": "https://www.instagram.com/langleeschool/",
            "twitter": "https://twitter.com/langleeschool",
            "spotify": "https://open.spotify.com/artist/1D96VVpW4US2VSZaZGsRmH"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800740/80074004.jpg"
    },
    "Rohann": {
        "names": {
            "KO": "이로한",
            "EN": "Rohann"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/10jo9gGaXEw8lAgB3gK0c1",
            "tiktok": "https://www.tiktok.com/@rohannlxiv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200536/20053697.jpg"
    },
    "LeeMujin": {
        "names": {
            "KO": "이무진",
            "EN": "LeeMujin"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC3fIV0BqVT-h6UjWIKAwiCQ",
            "instagram": "https://www.instagram.com/morilla_lmj/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200566/20056684.jpg"
    },
    "LEEMIJOO": {
        "names": {
            "KO": "이미주",
            "EN": "LEE MIJOO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/queen.chu_s/",
            "twitter": "https://twitter.com/LeeMiJoo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802096/80209600.jpg"
    },
    "HUTA": {
        "names": {
            "KO": "이민혁",
            "EN": "Lee Min-Hyuk"
        },
        "sns": {
            "instagram": "https://www.instagram.com/hutazone/",
            "twitter": "https://twitter.com/btob2mh",
            "spotify": "https://open.spotify.com/artist/4fgfmrBHIWsUuHxeOPhv61"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801234/80123431.jpg"
    },
    "LEESEOKHOON": {
        "names": {
            "KO": "이석훈",
            "EN": "LEE SEOK HOON"
        },
        "sns": {
            "instagram": "https://www.instagram.com/lee.seokhoon/",
            "spotify": "https://open.spotify.com/artist/16sxdaE9mk0Kis9CTP7Uot"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800433/80043328.jpg"
    },
    "ESENS": {
        "names": {
            "KO": "이센스",
            "EN": "E SENS"
        },
        "sns": {
            "twitter": "https://twitter.com/esensofficial",
            "instagram": "https://www.instagram.com/esensofficial/",
            "spotify": "https://open.spotify.com/artist/6a8cUmqOsXmjzq1aWKiVpH"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800041/80004127.jpg"
    },
    "LeeSoRa": {
        "names": {
            "KO": "이소라",
            "EN": "Lee So Ra"
        },
        "sns": {
            "instagram": "https://www.instagram.com/leesora.official/",
            "spotify": "https://open.spotify.com/artist/58BWh3yJrluDugLv0QF0eC"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/19/1915.jpg"
    },
    "LeeSooYoung": {
        "names": {
            "KO": "이수영",
            "EN": "Lee Soo Young"
        },
        "sns": {
            "twitter": "https://twitter.com/singer_lee",
            "fancafe": "http://cafe.daum.net/sooyoungAngel",
            "spotify": "https://open.spotify.com/artist/6GrRqCT2aRWjPMUmPY8oR5"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/35/3561.jpg"
    },
    "LEESUHYUN": {
        "names": {
            "KO": "이수현",
            "EN": "LEE SUHYUN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCOiM8FuCUFJkuUjCmB14rgg",
            "instagram": "https://www.instagram.com/akmu_suhyun/",
            "spotify": "https://open.spotify.com/artist/6zfPiJgoaqNPHsW3fsUlBN",
            "tiktok": "https://www.tiktok.com/@akmu_suhyun"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802033/80203306.jpg"
    },
    "LeeSeungGi": {
        "names": {
            "KO": "이승기",
            "EN": "Lee Seung Gi"
        },
        "sns": {
            "instagram": "https://instagram.com/leeseunggi.official/",
            "fancafe": "http://cafe.daum.net/leeseungki",
            "spotify": "https://open.spotify.com/artist/12AUp9oqeJDhNfO6IhQiNi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/721/72184.jpg"
    },
    "LeeSeungYoon": {
        "names": {
            "KO": "이승윤",
            "EN": "LEE SEUNG YOON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC2KmG_o7JZcPr052P87GdsQ",
            "instagram": "https://www.instagram.com/bgsmsyl/",
            "spotify": "https://open.spotify.com/artist/6z4R3mCiiIiLgpicseyNkV"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801157/80115762.jpg"
    },
    "J.DON": {
        "names": {
            "KO": "이승협",
            "EN": "J.DON"
        },
        "sns": {
            "instagram": "https://www.instagram.com/sssn9_zzzn9/",
            "spotify": "https://open.spotify.com/artist/6IpAfX90BIF2A4jZuT06qB"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802285/80228537.jpg"
    },
    "EXID": {
        "names": {
            "KO": "이엑스아이디",
            "EN": "EXID"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCZDD7mbBlV-Mg-vpI6wQvSA",
            "instagram": "https://www.instagram.com/exidofficial/",
            "twitter": "https://twitter.com/EXIDofficial",
            "spotify": "https://open.spotify.com/artist/1xs6WFotNQSXweo0GXrS0O"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801208/80120879.jpg"
    },
    "ENOi": {
        "names": {
            "KO": "이엔오아이",
            "EN": "ENOi"
        },
        "sns": {
            "fancafe": "http://cafe.daum.net/ENOi",
            "spotify": "https://open.spotify.com/artist/7nZr0bruX5BKXqb8LSe2U3"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200817/20081723.jpg"
    },
    "LeeYoungji": {
        "names": {
            "KO": "이영지",
            "EN": "Lee Young-ji"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC3dJKwKxhR1Boz56EsI5PYQ",
            "instagram": "https://instagram.com/youngji_02/",
            "twitter": "https://twitter.com/dokgodieinsaeng",
            "spotify": "https://open.spotify.com/artist/0Y2AcMPMpeuPXtPQGVvRBq"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200794/20079471.jpg"
    },
    "LeeYongshin": {
        "names": {
            "KO": "이용신",
            "EN": "Lee Yongshin"
        },
        "sns": {
            "twitter": "https://twitter.com/yongsini",
            "instagram": "https://www.instagram.com/im_yongsini/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800113/80011354.jpg"
    },
    "Leeyikyung": {
        "names": {
            "KO": "이이경",
            "EN": "Lee yikyung"
        },
        "sns": {
            "instagram": "https://www.instagram.com/luvlk89/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802497/80249745.jpg"
    },
    "LeeJuck": {
        "names": {
            "KO": "이적",
            "EN": "Lee Juck"
        },
        "sns": {
            "twitter": "https://twitter.com/jucklee",
            "instagram": "https://www.instagram.com/jucklee/",
            "spotify": "https://open.spotify.com/artist/0pfVDTchnVMBTzGylIuJNa"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/3/328.jpg"
    },
    "LeeJiHye": {
        "names": {
            "KO": "이지혜",
            "EN": "Lee Ji Hye"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCtkRVaUSpkuhqdKv39oBXKA",
            "twitter": "https://twitter.com/jihyesharp",
            "instagram": "https://www.instagram.com/jihyesharp/",
            "spotify": "https://open.spotify.com/artist/4fjnGkj0w54KWyIk2VTW7B"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/148/14846.jpg"
    },
    "LeeJinAh": {
        "names": {
            "KO": "이진아",
            "EN": "Lee Jin Ah"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jinahoho/",
            "spotify": "https://open.spotify.com/artist/4SzO3ea2qcjg1uLyNJAWnM"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801693/80169322.jpg"
    },
    "LEEJINHYUK": {
        "names": {
            "KO": "이진혁",
            "EN": "LEE JIN HYUK"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ljh_babysun/",
            "twitter": "https://twitter.com/LJH__official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802512/80251226.jpg"
    },
    "LeeChanWon": {
        "names": {
            "KO": "이찬원",
            "EN": "Lee Chan Won"
        },
        "sns": {
            "instagram": "https://www.instagram.com/mee_woon_sanae/",
            "fancafe": "http://cafe.daum.net/ichanwon",
            "spotify": "https://open.spotify.com/artist/1XlyP7FKwWs9j8GTdk5m4k",
            "tiktok": "https://www.tiktok.com/@chanddobaegi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201002/20100255.jpg"
    },
    "LeeChang-Min": {
        "names": {
            "KO": "이창민",
            "EN": "Lee Chang Min"
        },
        "sns": {
            "instagram": "https://www.instagram.com/p.f.changmin/",
            "twitter": "https://twitter.com/2AMCHANGMIN",
            "spotify": "https://open.spotify.com/artist/4nccw03u1XLPVaMMAysdv9"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800616/80061692.jpg"
    },
    "LeeChang-Sub": {
        "names": {
            "KO": "이창섭",
            "EN": "Lee Chang-Sub"
        },
        "sns": {
            "instagram": "https://www.instagram.com/lee_cs_btob/",
            "twitter": "https://twitter.com/LeeCS_BTOB",
            "spotify": "https://open.spotify.com/artist/1rp5HzWaNwgauM5W5YmZ3U"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801234/80123432.jpg"
    },
    "EPEX": {
        "names": {
            "KO": "이펙스",
            "EN": "EPEX"
        },
        "sns": {
            "twitter": "https://twitter.com/by_EPEX",
            "instagram": "https://www.instagram.com/epex.official/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201350/20135093.jpg"
    },
    "LEEHI": {
        "names": {
            "KO": "이하이",
            "EN": "LEE HI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCT86dWwZWeJWGQCDzbipU-A",
            "instagram": "https://www.instagram.com/leehi_hi/",
            "twitter": "https://twitter.com/leehi_hi",
            "spotify": "https://open.spotify.com/artist/7cVZApDoQZpS447nHTsNqu",
            "tiktok": "https://www.tiktok.com/@leehi_hi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801232/80123277.jpg"
    },
    "LEEHAERI": {
        "names": {
            "KO": "이해리",
            "EN": "LEE HAERI"
        },
        "sns": {
            "instagram": "https://www.instagram.com/dlgofl85/",
            "twitter": "https://twitter.com/tweethaeri",
            "spotify": "https://open.spotify.com/artist/7JE09i08qDhfHKd0rgFeEe"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800415/80041588.jpg"
    },
    "LeeHyori": {
        "names": {
            "KO": "이효리",
            "EN": "Lee Hyori"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/4FjoOJAndC0s9ZJUo6VGc5"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/49/4933.jpg"
    },
    "IN2IT": {
        "names": {
            "KO": "인투잇",
            "EN": "IN2IT"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC4_FlqZHf6zWPyaQpmPXChQ",
            "instagram": "https://www.instagram.com/official_in2it/",
            "twitter": "https://www.twitter.com/Official_IN2IT",
            "spotify": "https://open.spotify.com/artist/43GYq8c6nVEgaEyg0qtzJd",
            "tiktok": "https://www.tiktok.com/@official_in2it"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802930/80293081.jpg"
    },
    "INFINITE": {
        "names": {
            "KO": "인피니트",
            "EN": "INFINITE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCdzXSux7OnRD1Cml-DQ416Q",
            "instagram": "https://www.instagram.com/official_ifnt_/",
            "twitter": "https://twitter.com/Official_IFNT",
            "fancafe": "http://cafe.daum.net/infinite7",
            "spotify": "https://open.spotify.com/artist/1bkpTEmumLC3xc7HgMsttU"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800680/80068051.jpg"
    },
    "SiwanYim": {
        "names": {
            "KO": "임시완",
            "EN": "Si-wan Yim"
        },
        "sns": {
            "twitter": "https://twitter.com/Siwan_ZEA",
            "instagram": "https://www.instagram.com/yim_siwang/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800628/80062870.jpg?version=6684&d=20100420174611"
    },
    "LIMYOUNGWOONG": {
        "names": {
            "KO": "임영웅",
            "EN": "LIM YOUNG WOONG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC3WZlO2Zl8NE1yIUgtwUtQw",
            "instagram": "https://www.instagram.com/im_hero____/",
            "twitter": "https://twitter.com/limyoungwoong",
            "fancafe": "http://cafe.daum.net/hero0616",
            "spotify": "https://open.spotify.com/artist/75MOYjGEyyH5U4ZFHOPvxR"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802655/80265501.jpg"
    },
    "LimJeongHee": {
        "names": {
            "KO": "임정희",
            "EN": "Lim Jeong Hee"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCkMjeGzl2GtYuaUsM08-wkQ",
            "instagram": "https://www.instagram.com/welcomtomaworld/",
            "twitter": "https://twitter.com/welcomtomaworld",
            "spotify": "https://open.spotify.com/artist/6VDMtQjKKIrMJ3bog4MdaJ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/104/10499.jpg"
    },
    "LIMJIMIN": {
        "names": {
            "KO": "임지민",
            "EN": "LIM JIMIN"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/6MR6N2h4KSNmJ26OSrROYh"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200830/20083013.jpg"
    },
    "ChangJungIm": {
        "names": {
            "KO": "임창정",
            "EN": "Chang Jung Im"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCYklS0dalWLBU0aDKaLyuKw",
            "instagram": "https://www.instagram.com/imchangjung3309/",
            "twitter": "https://twitter.com/imchangjung73",
            "spotify": "https://open.spotify.com/artist/4dB2XmMpzPxsMRnt62TbF5"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/19/1958.jpg"
    },
    "IMFACT": {
        "names": {
            "KO": "임팩트",
            "EN": "IMPACT"
        },
        "sns": {
            "twitter": "https://twitter.com/imfact_twt",
            "instagram": "https://www.instagram.com/official_imfact/",
            "fancafe": "http://cafe.daum.net/IMFACTofficial",
            "spotify": "https://open.spotify.com/artist/3ejYNz33SNAa1Qxo9g0qCG"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802559/80255949.jpg"
    },
    "LIMHYUNSIK": {
        "names": {
            "KO": "임현식",
            "EN": "LIM HYUNSIK"
        },
        "sns": {
            "instagram": "https://www.instagram.com/imhyunsik/",
            "twitter": "https://twitter.com/BTOB_IMHYUNSIK",
            "spotify": "https://open.spotify.com/artist/0SA2I3s4t7hmv1XVvky9Po"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801234/80123433.jpg"
    },
    "ITZY": {
        "names": {
            "KO": "있지",
            "EN": "ITZY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCDhM2k2Cua-JdobAh5moMFg",
            "twitter": "https://twitter.com/ITZYOfficial",
            "instagram": "https://www.instagram.com/itzy.all.in.us/",
            "spotify": "https://open.spotify.com/artist/2KC9Qb60EaY0kW4eH68vr3",
            "tiktok": "https://www.tiktok.com/@itzyofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803274/80327433.jpg"
    },
    "Zion.T": {
        "names": {
            "KO": "자이언티",
            "EN": "Zion.T"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCGlh8hUWcD1fgW7jbh1SEfw",
            "instagram": "https://www.instagram.com/ziont/",
            "twitter": "https://twitter.com/SkinnyRed",
            "spotify": "https://open.spotify.com/artist/5HenzRvMtSrgtvU16XAoby"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800858/80085859.jpg"
    },
    "Jannabi": {
        "names": {
            "KO": "잔나비",
            "EN": "Jannabi"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCMIUx2zV4VvZGyrt4CetTbA",
            "instagram": "https://www.instagram.com/bandjannabi/",
            "twitter": "https://twitter.com/BandJannabi",
            "spotify": "https://open.spotify.com/artist/2SY6OktZyMLdOnscX3DCyS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801889/80188909.jpg"
    },
    "JANGDONGWOO": {
        "names": {
            "KO": "장동우",
            "EN": "JANG DONG WOO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ddong_gg0/",
            "spotify": "https://open.spotify.com/artist/2AK8mEsvIRVd6biBapWe3o"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800705/80070518.jpg"
    },
    "JANGMINHO": {
        "names": {
            "KO": "장민호",
            "EN": "JANG MIN HO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC00wMKeoF72UURd3WO9pZHw",
            "instagram": "https://www.instagram.com/jangminho7/",
            "fancafe": "http://cafe.daum.net/minhoJang",
            "spotify": "https://open.spotify.com/artist/2SeVOe0CXUEKtCq3BR5A0v",
            "tiktok": "https://www.tiktok.com/@luckyjangminho"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800960/80096067.jpg"
    },
    "BeomJuneJang": {
        "names": {
            "KO": "장범준",
            "EN": "Beom June Jang"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCjwCsj-axFNcxnv3yzV22WQ",
            "spotify": "https://open.spotify.com/artist/529ZdRwFoSKtQ0LPwKxGiu"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801104/80110450.jpg"
    },
    "WOOYOUNG": {
        "names": {
            "KO": "장우영",
            "EN": "WOO YOUNG"
        },
        "sns": {
            "twitter": "https://twitter.com/0430yes",
            "spotify": "https://open.spotify.com/artist/16iaWzk4PHL4GCjzyT6zZn"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800482/80048276.jpg"
    },
    "JANGWOOHYUK": {
        "names": {
            "KO": "장우혁",
            "EN": "JANG WOO HYUK"
        },
        "sns": {
            "twitter": "https://twitter.com/jangwoohyuk",
            "instagram": "https://www.instagram.com/woohyukjang/",
            "spotify": "https://open.spotify.com/artist/3Gka2tZrE8vX4fBFtgknqB"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/17/1784.jpg"
    },
    "JangJane": {
        "names": {
            "KO": "장재인",
            "EN": "Jang Jane"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jangjane_/",
            "spotify": "https://open.spotify.com/artist/5gPt59GY3WylaJDmUiZLcZ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800795/80079592.jpg"
    },
    "JvckiWai": {
        "names": {
            "KO": "재키와이",
            "EN": "Jvcki Wai"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jvckiwai/",
            "spotify": "https://open.spotify.com/artist/4bjcB3ZKiHgPzJvY2S2FLN"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200188/20018876.jpg"
    },
    "JACKSON": {
        "names": {
            "KO": "잭슨",
            "EN": "Jackson"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCJS0K01yC8BmQtSuRdqqo3w",
            "instagram": "https://www.instagram.com/jacksonwang852g7/",
            "twitter": "https://twitter.com/JacksonWang852",
            "spotify": "https://open.spotify.com/artist/1kfWoWgCugPkyxQP8lkRlY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801783/80178394.jpg"
    },
    "JUSTHIS": {
        "names": {
            "KO": "저스디스",
            "EN": "JUSTHIS"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/0Ch0t9gI47Lkal71uQnmV3"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802062/80206219.jpg"
    },
    "JUSTB": {
        "names": {
            "KO": "저스트비",
            "EN": "JUST B"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCcpodGf_wkyawcTc-fXa82g",
            "twitter": "https://twitter.com/JUSTB_Official",
            "instagram": "https://www.instagram.com/JUSTB_IG_official/",
            "spotify": "https://open.spotify.com/artist/2f0bPttugNpkg34HIxBIWe"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803554/80355449.jpg"
    },
    "Jukjae": {
        "names": {
            "KO": "적재",
            "EN": "Jukjae"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jungjukjae/",
            "spotify": "https://open.spotify.com/artist/7bWYN0sHvyH7yv1uefX07U",
            "tiktok": "https://www.tiktok.com/@jungjukjae"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80087/8008787.jpg"
    },
    "SOMI": {
        "names": {
            "KO": "전소미",
            "EN": "SOMI"
        },
        "sns": {
            "instagram": "https://www.instagram.com/somsomi0309/",
            "twitter": "https://twitter.com/somi_official_",
            "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR",
            "tiktok": "https://www.tiktok.com/@somi_official_"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802590/80259077.jpg"
    },
    "JEONSOYEON": {
        "names": {
            "KO": "전소연",
            "EN": "JEON SOYEON"
        },
        "sns": {
            "instagram": "https://www.instagram.com/tiny.pretty.j/",
            "spotify": "https://open.spotify.com/artist/6Xg22wJOAcnvPUfk5WvODH"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200232/20023241.jpg"
    },
    "JUNJIN": {
        "names": {
            "KO": "전진",
            "EN": "JUNJIN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UChr1oNRxijLzcQAbsnYcbzQ",
            "twitter": "https://twitter.com/JunJin_official",
            "spotify": "https://open.spotify.com/artist/5puur8AWnDOKudmjScQdjw"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/16/1635.jpg"
    },
    "JunHyoSeong": {
        "names": {
            "KO": "전효성",
            "EN": "Jun Hyo Seong\\t\\t\\t"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCTamE9g1cVy7hz4Q1bE56cQ",
            "instagram": "https://www.instagram.com/superstar_jhs/",
            "twitter": "https://twitter.com/superstar_jhs",
            "fancafe": "http://cafe.daum.net/JunHyoSung",
            "spotify": "https://open.spotify.com/artist/73RRzEpK7IQexOhC0CuTRZ",
            "tiktok": "https://www.tiktok.com/@jhs_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800620/80062045.jpg"
    },
    "JUNGKOOK": {
        "names": {
            "KO": "정국",
            "EN": "JUNGKOOK"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jungkook.97/",
            "spotify": "https://open.spotify.com/artist/6HaGTQPmzraVmaVxvz6EUc"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801808/80180889.jpg"
    },
    "junggigo": {
        "names": {
            "KO": "정기고",
            "EN": "junggigo"
        },
        "sns": {
            "instagram": "https://www.instagram.com/junggigo/",
            "twitter": "https://twitter.com/junggigo",
            "spotify": "https://open.spotify.com/artist/6zTIxEXFWjoNu2VXauDITb"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800517/80051717.jpg"
    },
    "JUNGDAEHYUN": {
        "names": {
            "KO": "정대현",
            "EN": "JUNG DAE HYUN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/official_jdh/",
            "fancafe": "http://cafe.daum.net/jungdaehyun",
            "spotify": "https://open.spotify.com/artist/17LUHykIKujFPpkdbyq1E1"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801199/80119998.jpg"
    },
    "JeongDongWon": {
        "names": {
            "KO": "정동원",
            "EN": "Jeong Dong Won"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCrLQ0ovys23H9xBV6U-Sd4A",
            "instagram": "https://www.instagram.com/dongwon_15/",
            "fancafe": "http://cafe.daum.net/jeongdongwon",
            "spotify": "https://open.spotify.com/artist/7fB8Qn00ToFmUY3mAJJSki",
            "tiktok": "https://www.tiktok.com/@jeongdongwontv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803350/80335035.jpg"
    },
    "JungDongHa": {
        "names": {
            "KO": "정동하",
            "EN": "Jung Dong Ha"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCbnQ_u2RSCK-qQsh2xyvbZA",
            "fancafe": "http://cafe.daum.net/BooHwalDongHa",
            "spotify": "https://open.spotify.com/artist/5Y5c91VcBMoVZbYBZdoRnu"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800152/80015268.jpg"
    },
    "JEONGSEWOON": {
        "names": {
            "KO": "정세운",
            "EN": "JEONG SEWOON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnT5DqsxopUmAsIqEmrgvUg",
            "instagram": "https://www.instagram.com/official_jeongsewoon/",
            "twitter": "https://twitter.com/jeongsewoon_twt",
            "fancafe": "http://cafe.daum.net/official-jeongsewoon",
            "spotify": "https://open.spotify.com/artist/2l9aF9jOgB7GI1uyNkx836"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80649/8064929.jpg"
    },
    "JungSeunghwan": {
        "names": {
            "KO": "정승환",
            "EN": "Jung Seunghwan"
        },
        "sns": {
            "instagram": "https://www.instagram.com/__seung__h/",
            "spotify": "https://open.spotify.com/artist/7l8rOFwZFQ3G0sgZ7gjGng"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802132/80213200.jpg"
    },
    "Yein": {
        "names": {
            "KO": "정예인",
            "EN": "Yein"
        },
        "sns": {
            "instagram": "https://www.instagram.com/happpy_yein/",
            "spotify": "https://open.spotify.com/artist/3mZkPqzEdMYwaKSQSd2lJQ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802096/80209608.jpg"
    },
    "JUNGYONGHWA": {
        "names": {
            "KO": "정용화",
            "EN": "JUNG YONG HWA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCqKiky8ZC9knoRYwRlDfWmQ",
            "instagram": "https://www.instagram.com/jyheffect0622/",
            "twitter": "https://twitter.com/JYHeffect",
            "spotify": "https://open.spotify.com/artist/6zhAP0FoDccL9kuETOC20q"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800633/80063327.jpg"
    },
    "JeongEunJi": {
        "names": {
            "KO": "정은지",
            "EN": "Jeong Eun Ji"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCHTZl9wrDAV45L8IPS7ZYzg",
            "instagram": "https://www.instagram.com/ARTIST_EUNJI/",
            "twitter": "https://twitter.com/Apinkjej",
            "spotify": "https://open.spotify.com/artist/7cgAZ03K2mMaWB70gwZs92"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800984/80098462.jpg"
    },
    "jungin": {
        "names": {
            "KO": "정인",
            "EN": "Jung In"
        },
        "sns": {
            "instagram": "https://www.instagram.com/JUNGINJUNGIN/",
            "twitter": "https://twitter.com/JIFromAndromeda",
            "spotify": "https://open.spotify.com/artist/0CO7rEbHBtpqgY9QPYJgPM"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800133/80013376.jpg"
    },
    "JungIL-Hoon": {
        "names": {
            "KO": "정일훈",
            "EN": "Jung IL-Hoon"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ilhoonmj/",
            "twitter": "https://twitter.com/BTOB_ILL",
            "spotify": "https://open.spotify.com/artist/7McwKT2tZl8LMXUQRH3YDM"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801234/80123435.jpg"
    },
    "JungJaeHyung": {
        "names": {
            "KO": "정재형",
            "EN": "Jung Jae Hyung"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jaehyungjung17/",
            "twitter": "https://twitter.com/le_petit_piano"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/15/1529.jpg"
    },
    "JungJunil": {
        "names": {
            "KO": "정준일",
            "EN": "Jung Junil"
        },
        "sns": {
            "twitter": "https://twitter.com/jooniljung",
            "instagram": "https://www.instagram.com/loveidococococo/",
            "spotify": "https://open.spotify.com/artist/2dhnFfsPxve8lzhwfXVFpS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800618/80061882.jpg"
    },
    "JeongJinwoon": {
        "names": {
            "KO": "정진운",
            "EN": "Jeong Jinwoon"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jinwoon52/",
            "twitter": "https://twitter.com/2AMjinwoon",
            "spotify": "https://open.spotify.com/artist/0TP4BhbuNVvO5aIPJlTFjh"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800616/80061691.jpg"
    },
    "JungKey": {
        "names": {
            "KO": "정키",
            "EN": "Jung Key"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jungkey_/",
            "spotify": "https://open.spotify.com/artist/6fTEkjuuZ3hH6fdeBxxbA2"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801107/80110771.jpg"
    },
    "ZE:A": {
        "names": {
            "KO": "제국의아이들",
            "EN": "ZE:A"
        },
        "sns": {
            "twitter": "https://twitter.com/ZEA_9",
            "fancafe": "http://cafe.daum.net/Starempire",
            "spotify": "https://open.spotify.com/artist/6lGfLCig2b5mvDTtsPSrb0"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800627/80062789.jpg"
    },
    "JENNIE": {
        "names": {
            "KO": "제니",
            "EN": "JENNIE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCNYi_zGmR519r5gYdOKLTjQ",
            "instagram": "https://www.instagram.com/jennierubyjane/",
            "spotify": "https://open.spotify.com/artist/250b0Wlc5Vk0CoUsaCY84M"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802656/80265678.jpg"
    },
    "Jessi": {
        "names": {
            "KO": "제시",
            "EN": "Jessi"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCN2bQLTTvNPZWCWU5TYghKA",
            "instagram": "https://www.instagram.com/jessicah_o/",
            "spotify": "https://open.spotify.com/artist/64k5e9kV9MdukXjFrR5R37",
            "tiktok": "https://www.tiktok.com/@itsjessibaby"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800140/80014003.jpg"
    },
    "Jessica": {
        "names": {
            "KO": "제시카",
            "EN": "Jessica"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jessica.syj/",
            "spotify": "https://open.spotify.com/artist/1htfe3DR9bbdOq0NeCIE2W",
            "tiktok": "https://www.tiktok.com/@tomdnc.forreal"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800264/80026440.jpg"
    },
    "JeA": {
        "names": {
            "KO": "제아",
            "EN": "JeA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCTYncFbHH6DnMqf-PHUzjAA",
            "twitter": "https://twitter.com/Jeaworld",
            "instagram": "https://www.instagram.com/jeaworld/",
            "spotify": "https://open.spotify.com/artist/3cls7yF8iRNkOXJGLsGRal",
            "tiktok": "https://www.tiktok.com/@jeaworld"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800201/80020174.jpg"
    },
    "JRabbit": {
        "names": {
            "KO": "제이레빗",
            "EN": "J Rabbit"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/4Imsd61cGosmAFBaMLtl4G"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800870/80087093.jpg"
    },
    "Jamie": {
        "names": {
            "KO": "제이미",
            "EN": "Jamie"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCarNrkLZREWeBw49EId_SDQ",
            "instagram": "https://www.instagram.com/jiminxjamie/",
            "twitter": "https://twitter.com/jiminpark07",
            "spotify": "https://open.spotify.com/artist/2YXlVLKq3X3soXd2aXUtIT"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801232/80123273.jpg"
    },
    "JAYB": {
        "names": {
            "KO": "제이비",
            "EN": "JAY B"
        },
        "sns": {
            "youtube": "https://youtube.com/channel/UCYfHTqPM-bgnBaQqzFjBogQ",
            "instagram": "https://www.instagram.com/jaybnow.hr/",
            "twitter": "https://twitter.com/jaybnow_hr",
            "spotify": "https://open.spotify.com/artist/3IjHX8KZKoeq3X4QgXxqbT"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801228/80122877.jpg"
    },
    "JBJ": {
        "names": {
            "KO": "제이비제이",
            "EN": "JBJ"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jbjofficial787/",
            "twitter": "https://twitter.com/JBJofficial787",
            "fancafe": "http://cafe.daum.net/jbjofficial",
            "spotify": "https://open.spotify.com/artist/6VJXRJvRRyLv99RZbXJ8RO"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802923/80292310.jpg"
    },
    "JBJ95": {
        "names": {
            "KO": "제이비제이95",
            "EN": "JBJ95"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC0S9bmc1yYR02O4RKfzvXWA",
            "instagram": "https://www.instagram.com/jbj95__official/",
            "twitter": "https://twitter.com/JBJ95__official",
            "fancafe": "http://cafe.daum.net/jbj95official",
            "spotify": "https://open.spotify.com/artist/7G6wtLzZON7qJQ2Cw2kxVp",
            "tiktok": "https://www.tiktok.com/@official.jbj95"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200682/20068267.jpg"
    },
    "j-hope": {
        "names": {
            "KO": "제이홉",
            "EN": "j-hope"
        },
        "sns": {
            "instagram": "https://www.instagram.com/uarmyhope/",
            "spotify": "https://open.spotify.com/artist/0b1sIQumIAsNbqAoIClSpy"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801808/80180886.jpg"
    },
    "SechsKies": {
        "names": {
            "KO": "젝스키스",
            "EN": "Sechs Kies"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCcADqTjMyMol8B8mWm9n6rA",
            "spotify": "https://open.spotify.com/artist/6uRyNreOHUvWPNGnKfIo27"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/13/1383.jpg"
    },
    "JoKwon": {
        "names": {
            "KO": "조권",
            "EN": "JoKwon"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCsXSSsAnx7BCE5OF3a2NTLA",
            "instagram": "https://www.instagram.com/kwon_jo/",
            "twitter": "https://twitter.com/2AMkwon",
            "spotify": "https://open.spotify.com/artist/1hJ6EZjb0pnvPeBdzulrUr",
            "tiktok": "https://www.tiktok.com/@jokwon_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800616/80061688.jpg"
    },
    "WOODZ": {
        "names": {
            "KO": "조승연",
            "EN": "WOODZ"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCaMhpehN8xNWkVJB3ZQY0qQ",
            "instagram": "https://www.instagram.com/woodz_dnwm/",
            "twitter": "https://www.twitter.com/_chowoodz",
            "fancafe": "http://cafe.daum.net/chowoodz",
            "spotify": "https://open.spotify.com/artist/6y9nlaoynxSvoTGY09Vdcy",
            "tiktok": "https://www.tiktok.com/@woodz_9696"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802064/80206427.jpg"
    },
    "JOYURI": {
        "names": {
            "KO": "조유리",
            "EN": "JO YU RI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCSEVFgCkKem_c3nIBm7F37g",
            "instagram": "https://instagram.com/zo__glasss/",
            "twitter": "https://twitter.com/JOYURI_offcl",
            "fancafe": "https://cafe.daum.net/JOYURI.offcl",
            "spotify": "https://open.spotify.com/artist/3LFFf4EpKn2krneZ9vozyz"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803218/80321899.jpg"
    },
    "JOY": {
        "names": {
            "KO": "조이",
            "EN": "JOY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/_imyour_joy/",
            "spotify": "https://open.spotify.com/artist/0sYpJ0nCC8AlDrZFeAA7ub"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801994/80199444.jpg"
    },
    "CHOJUNGSEOK": {
        "names": {
            "KO": "조정석",
            "EN": "CHOJUNGSEOK"
        },
        "sns": {
            "twitter": "https://twitter.com/jojeol",
            "spotify": "https://open.spotify.com/artist/0MU0Hxwaz1daT4FVqx3Smz"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800199/80019942.jpg"
    },
    "JUNGCHICHO": {
        "names": {
            "KO": "조정치",
            "EN": "JUNGCHI CHO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/chojungchi/",
            "twitter": "https://twitter.com/milescho78",
            "spotify": "https://open.spotify.com/artist/51YcndDz6I5Ys0vQQUXtQC"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800136/80013629.jpg"
    },
    "JohnPark": {
        "names": {
            "KO": "존박",
            "EN": "John Park"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCq_eSar3OM2JygE8F9oeCSw",
            "instagram": "https://www.instagram.com/johnparkgram/",
            "spotify": "https://open.spotify.com/artist/4mbvd7ZJ2goftjy1L33LiB"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800795/80079593.jpg"
    },
    "JONGHYUN": {
        "names": {
            "KO": "종현",
            "EN": "JONGHYUN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jonghyun.948/",
            "twitter": "https://twitter.com/realjonghyun90",
            "spotify": "https://open.spotify.com/artist/5rGgflnIpRNizTCozbYBuY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800442/80044238.jpg"
    },
    "george": {
        "names": {
            "KO": "죠지",
            "EN": "George"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/2pRZp2WxvnWWiSPcSSYkNV"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802579/80257960.jpg"
    },
    "JUNIEL": {
        "names": {
            "KO": "주니엘",
            "EN": "JUNIEL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCsmvlXuU-vTEjHwuLaLzNDw",
            "twitter": "https://twitter.com/junielism",
            "fancafe": "http://cafe.daum.net/JUNIEL",
            "spotify": "https://open.spotify.com/artist/0F8gvxccUYPndXVsyLmCi6",
            "tiktok": "https://www.tiktok.com/@juniel930903"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801276/80127694.jpg"
    },
    "jooyoung": {
        "names": {
            "KO": "주영",
            "EN": "jooyoung "
        },
        "sns": {
            "instagram": "https://www.instagram.com/jooyoung/",
            "twitter": "https://twitter.com/official_JYoung",
            "spotify": "https://open.spotify.com/artist/1vct46rBqLNRbE9wCibXUH"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800882/80088226.jpg"
    },
    "XIA": {
        "names": {
            "KO": "준수",
            "EN": "XIA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCdk_-wGLorR0-81Nxj0w_VA",
            "twitter": "https://twitter.com/1215thexiahtic",
            "instagram": "https://www.instagram.com/xiaxiaxia1215/",
            "spotify": "https://open.spotify.com/artist/0ZHbYuRbvC4tWW0iOdybwi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800011/80001104.jpg"
    },
    "JUN.K": {
        "names": {
            "KO": "준케이",
            "EN": "JUN. K"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jun2dakay/",
            "twitter": "https://twitter.com/Jun2daKAY",
            "spotify": "https://open.spotify.com/artist/4m69UKabjuuaoayREZud9h",
            "tiktok": "https://www.tiktok.com/@jun2dakay_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800482/80048273.jpg"
    },
    "JUNHO": {
        "names": {
            "KO": "준호",
            "EN": "JUNHO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/le2jh/",
            "twitter": "https://twitter.com/dlwnsghek",
            "spotify": "https://open.spotify.com/artist/1nEFr6pWrot80eRuOkZQxg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800482/80048277.jpg"
    },
    "G-DRAGON": {
        "names": {
            "KO": "지드래곤",
            "EN": "G-DRAGON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCeU5qTuBiqTU5z-hyL6WITQ",
            "instagram": "https://www.instagram.com/xxxibgdrgn/",
            "twitter": "https://twitter.com/ibgdrgn",
            "spotify": "https://open.spotify.com/artist/30b9WulBM8sFuBo17nNq9c"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/75/7570.jpg"
    },
    "JIMIN": {
        "names": {
            "KO": "지민",
            "EN": "JIMIN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/j.m/",
            "spotify": "https://open.spotify.com/artist/1oSPZhvZMIrWW5I41kPkkY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801808/80180887.jpg"
    },
    "JIMIN_AOA": {
        "names": {
            "KO": "지민 (AOA)",
            "EN": "JIMIN (AOA)"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCyVcGmXwtOinFGnpv82ceag"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801327/80132708.jpg"
    },
    "GSoul": {
        "names": {
            "KO": "지소울",
            "EN": "GSoul"
        },
        "sns": {
            "instagram": "https://www.instagram.com/g_theprince/",
            "spotify": "https://open.spotify.com/artist/4oEXworvhegyK83rZwVyWL",
            "tiktok": "https://www.tiktok.com/@gsoulofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800013/80001310.jpg?version=154670&d=20211202180137"
    },
    "Zia": {
        "names": {
            "KO": "지아",
            "EN": "Zia"
        },
        "sns": {
            "twitter": "https://twitter.com/ZIA_voice",
            "spotify": "https://open.spotify.com/artist/2vAxwTAH2OaInCfMxriCqk"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800258/80025838.jpg"
    },
    "JIYEON": {
        "names": {
            "KO": "지연",
            "EN": "JIYEON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC9N8C0XFvTCtBGUV2ik6Q3w",
            "instagram": "https://www.instagram.com/jiyeon2__/",
            "twitter": "https://twitter.com/pjy1234",
            "spotify": "https://open.spotify.com/artist/4ojQ8Cy1AVup7CZ0OG68eq",
            "tiktok": "https://www.tiktok.com/@jiyeon2_"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800582/80058293.jpg"
    },
    "god": {
        "names": {
            "KO": "지오디",
            "EN": "god"
        },
        "sns": {
            "fancafe": "http://cafe.daum.net/fangod.house",
            "spotify": "https://open.spotify.com/artist/1nTCpd63NkuGGpCIbo4Ywl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/14/1403.jpg"
    },
    "JIJINSEOK": {
        "names": {
            "KO": "지진석",
            "EN": "JI JIN SEOK"
        },
        "sns": {
            "instagram": "https://www.instagram.com/by_jinseok/",
            "twitter": "https://twitter.com/JINSEOK_JI_",
            "spotify": "https://open.spotify.com/artist/5iwc2ZJnuU9g4F6JaAY6Zw"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200847/20084758.jpg"
    },
    "ZICO": {
        "names": {
            "KO": "지코",
            "EN": "ZICO"
        },
        "sns": {
            "instagram": "https://www.instagram.com/woozico0914/",
            "twitter": "https://twitter.com/ZICO92",
            "spotify": "https://open.spotify.com/artist/4XpUIb8uuNlIWVKmgKZXC0",
            "tiktok": "https://www.tiktok.com/@kozico0914"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800694/80069449.jpg"
    },
    "G2": {
        "names": {
            "KO": "지투",
            "EN": "G2"
        },
        "sns": {
            "instagram": "https://www.instagram.com/g2slife/",
            "twitter": "https://twitter.com/g2slife",
            "spotify": "https://open.spotify.com/artist/4ueZwsEtcqcO0IZywqgk66",
            "tiktok": "https://www.tiktok.com/@nicktuinenburg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801709/80170995.jpg"
    },
    "JIN": {
        "names": {
            "KO": "진",
            "EN": "JIN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jin/",
            "spotify": "https://open.spotify.com/artist/5vV3bFXnN6D6N3Nj4xRvaV"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801808/80180883.jpg"
    },
    "JINBO": {
        "names": {
            "KO": "진보",
            "EN": "JINBO"
        },
        "sns": {
            "twitter": "https://twitter.com/JINBOsuperfreak",
            "spotify": "https://open.spotify.com/artist/4PlxqkEk6seCManiTAPTWb"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800089/80008901.jpg"
    },
    "ChaEunwoo": {
        "names": {
            "KO": "차은우",
            "EN": "Cha Eunwoo"
        },
        "sns": {
            "instagram": "https://www.instagram.com/eunwo.o_c/",
            "spotify": "https://open.spotify.com/artist/76ea6HHCvHlTqhF9I0jtHU"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802570/80257085.jpg"
    },
    "CHANYEOL": {
        "names": {
            "KO": "찬열",
            "EN": "CHANYEOL"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCR4vlBiZ4Ua8Uzm9z91Qn1g",
            "instagram": "https://www.instagram.com/real__pcy/",
            "spotify": "https://open.spotify.com/artist/6jV25rzTKQ2zMgrqHha1V5"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801246/80124636.jpg"
    },
    "CHANGMO": {
        "names": {
            "KO": "창모",
            "EN": "CHANGMO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCj1partPHjSV9Hf23adjgLQ",
            "spotify": "https://open.spotify.com/artist/3hvinNZRzTLoREmqFiKr1b",
            "tiktok": "https://www.tiktok.com/@changmo9"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801892/80189299.jpg"
    },
    "Chancellor": {
        "names": {
            "KO": "챈슬러",
            "EN": "Chancellor"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCIcjOmEJRRt0ERWCSxrdgKQ",
            "instagram": "https://www.instagram.com/chancellorofficial/",
            "twitter": "https://twitter.com/dearchancellor",
            "spotify": "https://open.spotify.com/artist/0u06YeydlBk3awnk5KgdBx",
            "tiktok": "https://www.tiktok.com/@chancellorofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801633/80163333.jpg"
    },
    "BZBOYS": {
        "names": {
            "KO": "청공소년",
            "EN": "BZ-BOYS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCMkF19lMklzWxDrdj4y09hQ",
            "twitter": "https://twitter.com/bz_boys",
            "instagram": "https://www.instagram.com/bz_boys/",
            "fancafe": "http://cafe.daum.net/Bz-Boys",
            "spotify": "https://open.spotify.com/artist/73FA33YtQWdPuswF6u7u4D"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200855/20085596.jpg"
    },
    "CHUNGHA": {
        "names": {
            "KO": "청하",
            "EN": "CHUNG HA"
        },
        "sns": {
            "instagram": "https://www.instagram.com/chungha_official/",
            "twitter": "https://twitter.com/CHUNGHA_MNHent",
            "fancafe": "http://cafe.daum.net/MNH-Chungha",
            "spotify": "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
            "tiktok": "https://www.tiktok.com/@official_chungha"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802590/80259080.jpg"
    },
    "CherryBullet": {
        "names": {
            "KO": "체리블렛",
            "EN": "Cherry Bullet"
        },
        "sns": {
            "instagram": "https://www.instagram.com/cherrybullet/",
            "twitter": "https://www.twitter.com/cherrybullet",
            "fancafe": "http://cafe.daum.net/CherryBullet",
            "spotify": "https://open.spotify.com/artist/3IJCdgkBZbieocLZ4e94GZ",
            "tiktok": "https://www.tiktok.com/@cherrybulletofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200741/20074110.jpg"
    },
    "CHEN": {
        "names": {
            "KO": "첸",
            "EN": "CHEN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC5vXjgHeenPq0lTSokouxdA",
            "spotify": "https://open.spotify.com/artist/0UEP2XBR9aC5NBKcAKnBIq"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801202/80120273.jpg"
    },
    "MAX": {
        "names": {
            "KO": "최강창민",
            "EN": "MAX"
        },
        "sns": {
            "instagram": "https://www.instagram.com/changmin88/",
            "spotify": "https://open.spotify.com/artist/7FiAkNWMb6ZBYI8tbQLuIS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800011/80001105.jpg"
    },
    "YENA": {
        "names": {
            "KO": "최예나",
            "EN": "YENA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCkrDEGNM3mqZXHk2MfnOjMw",
            "twitter": "https://twitter.com/YENA_OFFICIAL",
            "instagram": "https://www.instagram.com/yena.jigumina/",
            "fancafe": "https://cafe.daum.net/CHOIYENA",
            "spotify": "https://open.spotify.com/artist/49muoiIu4uea4PO8vueUNN"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/950/803219/80321900.jpg"
    },
    "ChoiJunghoon": {
        "names": {
            "KO": "최정훈",
            "EN": "Choi Junghoon"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jannabijh/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801889/80188952.jpg"
    },
    "Chuu": {
        "names": {
            "KO": "츄",
            "EN": "Chuu"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UChK2DhvPSG3sY0jIYYngVBA",
            "instagram": "https://www.instagram.com/chuuo3o/",
            "spotify": "https://open.spotify.com/artist/1q86WVZhETqii5kKjEwYuB"
        },
        "imgUrl": ""
    },
    "CHEEZE": {
        "names": {
            "KO": "치즈",
            "EN": "CHEEZE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCgBc-YQjdgaF1RHeYREZaMg",
            "instagram": "https://www.instagram.com/cheeze__official/",
            "twitter": "https://twitter.com/cheezeofficial",
            "spotify": "https://open.spotify.com/artist/6NdzNrBP8Jbhzp6h7yojht"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801175/80117564.jpg"
    },
    "CHEETAH": {
        "names": {
            "KO": "치타",
            "EN": "CHEETAH"
        },
        "sns": {
            "instagram": "https://www.instagram.com/dhdldzlzl/",
            "spotify": "https://open.spotify.com/artist/6ftZYkensUYXNiMM7nFwhE"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801964/80196488.jpg"
    },
    "Carthegarden": {
        "names": {
            "KO": "카더가든",
            "EN": "Car, the garden"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/7c1HgFDe8ogy5NOZ1ANCJQ",
            "tiktok": "https://www.tiktok.com/@carthegarden_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801531/80153142.jpg"
    },
    "KARD": {
        "names": {
            "KO": "카드",
            "EN": "KARD"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC5OwlwvsVmf_lXHguB6OYFw",
            "twitter": "https://twitter.com/KARD_Official",
            "instagram": "https://www.instagram.com/official_kard/",
            "spotify": "https://open.spotify.com/artist/2JhAlkmukNvarUpGhTFXUQ",
            "tiktok": "https://www.tiktok.com/@official.kard"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802739/80273991.jpg"
    },
    "KARA": {
        "names": {
            "KO": "카라",
            "EN": "KARA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCbxYZzVHUrv-AhR6KZzGo0A",
            "twitter": "https://twitter.com/kara_dsp",
            "spotify": "https://open.spotify.com/artist/7aZ221EQfonNG2lO9Hh192"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800233/80023353.jpg"
    },
    "kai": {
        "names": {
            "KO": "카이",
            "EN": "KAI"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCB5lmq1AQOqQm_Ex120zLRA",
            "instagram": "https://www.instagram.com/zkdlin/",
            "spotify": "https://open.spotify.com/artist/6iVo62B0bdTknRcrktCmak"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801246/80124632.jpg"
    },
    "KANTO": {
        "names": {
            "KO": "칸토",
            "EN": "KANTO"
        },
        "sns": {
            "twitter": "https://twitter.com/kanto94",
            "instagram": "https://www.instagram.com/choikanto/",
            "spotify": "https://open.spotify.com/artist/1Pr77yszl1ikj6k9sy4Cju"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801336/80133631.jpg"
    },
    "Kassy": {
        "names": {
            "KO": "케이시",
            "EN": "Kassy"
        },
        "sns": {
            "instagram": "https://www.instagram.com/real_kassy/",
            "twitter": "https://twitter.com/Official_Kassy",
            "spotify": "https://open.spotify.com/artist/6pU8o91xAS0aWNjj06nQSU"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802258/80225898.jpg"
    },
    "K.will": {
        "names": {
            "KO": "케이윌",
            "EN": "K.will"
        },
        "sns": {
            "instagram": "https://www.instagram.com/kwill_official/",
            "twitter": "https://twitter.com/kwill_twt",
            "spotify": "https://open.spotify.com/artist/1XNC9ksvgXeD1xRJruSA5t"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800135/80013575.jpg"
    },
    "Kep1er": {
        "names": {
            "KO": "케플러",
            "EN": "Kep1er"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8whlOg70m2Yr3qSMjUhh0g",
            "instagram": "https://www.instagram.com/official.kep1er/",
            "twitter": "https://twitter.com/official_kep1er",
            "fancafe": "https://cafe.daum.net/kep1er.offcl",
            "spotify": "https://open.spotify.com/artist/5R7AMwDeroq6Ls0COQYpS4"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201510/20151053.jpg?version=325169&d=20211231152024"
    },
    "KEN": {
        "names": {
            "KO": "켄",
            "EN": "KEN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCA_PFwjzCb6CpfcEFT_jwjg",
            "instagram": "https://www.instagram.com/keken_0406/",
            "twitter": "https://twitter.com/jaehwany0406",
            "spotify": "https://open.spotify.com/artist/08fiOzXWHTizuWGyS1dWu6"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801279/80127900.jpg"
    },
    "CODEKUNST": {
        "names": {
            "KO": "코드 쿤스트",
            "EN": "CODE KUNST"
        },
        "sns": {
            "instagram": "https://www.instagram.com/code_kunst/",
            "twitter": "https://twitter.com/code_kunst",
            "spotify": "https://open.spotify.com/artist/4WnO2VmlwdTX77ANsThWLQ",
            "tiktok": "https://www.tiktok.com/@codekunst"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801551/80155172.jpg"
    },
    "Colde": {
        "names": {
            "KO": "콜드",
            "EN": "Colde"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCZFpMuxoquMkvyWkBNFHMwQ",
            "instagram": "https://www.instagram.com/wavycolde/",
            "twitter": "https://twitter.com/wavycolde",
            "spotify": "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802687/80268763.jpg"
    },
    "Coogie": {
        "names": {
            "KO": "쿠기",
            "EN": "Coogie"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/0IznZPMUyaPGdqfP4oqBja"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200536/20053623.jpg"
    },
    "QueenWASABII": {
        "names": {
            "KO": "퀸 와사비",
            "EN": "Queen WA$ABII"
        },
        "sns": {
            "instagram": "https://www.instagram.com/queenwasabii_official/",
            "spotify": "https://open.spotify.com/artist/5FQWaF32sJ8rXb8aPcj2VI",
            "tiktok": "https://www.tiktok.com/@queenwasabii"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200936/20093604.jpg"
    },
    "KNK": {
        "names": {
            "KO": "크나큰",
            "EN": "KNK"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCY-ES-QqCFC-xhRTyTsB-xw",
            "twitter": "https://twitter.com/KNKOfficial220",
            "instagram": "https://www.instagram.com/KNK_OFFICIAL_KNK/",
            "fancafe": "http://cafe.daum.net/officialknk",
            "spotify": "https://open.spotify.com/artist/5zx2slDKDXNn1e6779RzPd"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802574/80257452.jpg"
    },
    "CRAVITY": {
        "names": {
            "KO": "크래비티",
            "EN": "CRAVITY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCRm-0JVuUFh5HV7NGG7qXlQ",
            "twitter": "https://twitter.com/CRAVITYstarship",
            "instagram": "https://www.instagram.com/cravity_official/",
            "fancafe": "http://cafe.daum.net/cravity-official",
            "spotify": "https://open.spotify.com/artist/6FkhUhUwSPl3mGB6mmE8wn",
            "tiktok": "https://www.tiktok.com/@cravityofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201058/20105867.jpg"
    },
    "CRAXY": {
        "names": {
            "KO": "크랙시",
            "EN": "CRAXY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/craxy_official/",
            "twitter": "https://twitter.com/craxy_officials",
            "fancafe": "http://cafe.daum.net/cravity",
            "spotify": "https://open.spotify.com/artist/3C13AlJZ4QWHSruAWe9VPI",
            "tiktok": "https://www.tiktok.com/@craxy_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201020/20102058.jpg"
    },
    "Crush": {
        "names": {
            "KO": "크러쉬",
            "EN": "Crush"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCEU3spVQMmXrU0Nqhw00Gpg",
            "instagram": "https://www.instagram.com/crush9244/",
            "twitter": "https://twitter.com/crush9244",
            "fancafe": "http://cafe.daum.net/crushofficial",
            "spotify": "https://open.spotify.com/artist/6aLdhHUqgdKE86xbtNmY8g",
            "tiktok": "https://www.tiktok.com/@crush9244"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801426/80142603.jpg"
    },
    "CrayonPop": {
        "names": {
            "KO": "크레용팝",
            "EN": "Crayon Pop"
        },
        "sns": {
            "instagram": "https://www.instagram.com/crayonpop_official_/",
            "twitter": "https://twitter.com/crayonpop",
            "spotify": "https://open.spotify.com/artist/0ODX6aegsZkBmBeMA5qqwi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801316/80131691.jpg"
    },
    "CrucialStar": {
        "names": {
            "KO": "크루셜스타",
            "EN": "Crucial Star"
        },
        "sns": {
            "instagram": "https://www.instagram.com/crucialstar/",
            "twitter": "https://twitter.com/realcrucialstar",
            "spotify": "https://open.spotify.com/artist/4vdAgNz4vrUZVvS0CaVvGJ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800220/80022079.jpg"
    },
    "KRYSTAL": {
        "names": {
            "KO": "크리스탈",
            "EN": "KRYSTAL"
        },
        "sns": {
            "instagram": "https://www.instagram.com/vousmevoyez/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800607/80060785.jpg"
    },
    "CLASSy": {
        "names": {
            "KO": "클라씨",
            "EN": "CLASS:y"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCbCyYn2M_1ccicwj-KU7t0Q",
            "instagram": "https://www.instagram.com/m25_classy/",
            "twitter": "https://twitter.com/M25_CLASSy",
            "fancafe": "https://cafe.daum.net/M25.CLASSy",
            "spotify": "https://open.spotify.com/artist/3jcfHmXvjOgHzfyVE55GzZ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201586/20158623.jpg"
    },
    "Key": {
        "names": {
            "KO": "키",
            "EN": "Key"
        },
        "sns": {
            "instagram": "https://www.instagram.com/bumkeyk/",
            "spotify": "https://open.spotify.com/artist/6XXKPxRX2WWPPtfodzpc2v"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800442/80044242.jpg"
    },
    "KidMilli": {
        "names": {
            "KO": "키드밀리",
            "EN": "Kid Milli"
        },
        "sns": {
            "instagram": "https://www.instagram.com/kidcozyboy/",
            "spotify": "https://open.spotify.com/artist/7IWshUcKfJyDWrbiF2XT8J"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200099/20009970.jpg"
    },
    "Kisum": {
        "names": {
            "KO": "키썸",
            "EN": "Kisum"
        },
        "sns": {
            "instagram": "https://www.instagram.com/kisum0120/",
            "fancafe": "http://cafe.daum.net/kisum940120",
            "spotify": "https://open.spotify.com/artist/1CArfopvfCxakFJHup55FW",
            "tiktok": "https://www.tiktok.com/@musik0120"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801765/80176531.jpg"
    },
    "KINGDOM": {
        "names": {
            "KO": "킹덤",
            "EN": "KINGDOM"
        },
        "sns": {
            "twitter": "https://twitter.com/KINGDOM_GFent",
            "instagram": "https://www.instagram.com/kingdom_gfent/",
            "fancafe": "https://cafe.daum.net/KINGDOMofficial",
            "spotify": "https://open.spotify.com/artist/0p5Ot7c8cFHtS82hd1WBN3"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201261/20126151.jpg"
    },
    "TARGET": {
        "names": {
            "KO": "타겟",
            "EN": "TARGET"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCyf-XhWOK56eTcLvx_p4JPg",
            "twitter": "https://twitter.com/target7_k",
            "instagram": "https://www.instagram.com/target7official/",
            "spotify": "https://open.spotify.com/artist/66TV1ErY4LqbhZSfhnxQ1r",
            "tiktok": "https://www.tiktok.com/@target_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802032/80203230.jpg"
    },
    "tablo": {
        "names": {
            "KO": "타블로",
            "EN": "Tablo"
        },
        "sns": {
            "instagram": "https://www.instagram.com/blobyblo/",
            "twitter": "https://twitter.com/blobyblo",
            "spotify": "https://open.spotify.com/artist/3NdOtTPPaXrCyC7Lpmzyhv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/335/33545.jpg"
    },
    "T.O.P": {
        "names": {
            "KO": "탑",
            "EN": "T.O.P"
        },
        "sns": {
            "instagram": "https://www.instagram.com/choi_seung_hyun_tttop/",
            "spotify": "https://open.spotify.com/artist/4rO1Cxt1NcUcX2XbF19rDI"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800200/80020045.jpg"
    },
    "TAEMIN": {
        "names": {
            "KO": "태민",
            "EN": "TAEMIN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/lm_____ltm/",
            "spotify": "https://open.spotify.com/artist/13rF01aOogvnkuQXOlgTW8",
            "tiktok": "https://www.tiktok.com/@im_taemin"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800442/80044240.jpg"
    },
    "TAEYANG": {
        "names": {
            "KO": "태양",
            "EN": "TAEYANG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCDJnRpq0DnQhrwi1ruuQa7g",
            "instagram": "https://www.instagram.com/__youngbae__/",
            "twitter": "https://twitter.com/Realtaeyang",
            "spotify": "https://open.spotify.com/artist/6udveWUgX4vu75FF0DTrXV"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800200/80020042.jpg"
    },
    "TAEYEON": {
        "names": {
            "KO": "태연",
            "EN": "TAEYEON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC5z2fxN6rs69cSyXur6X6Mg",
            "instagram": "https://www.instagram.com/taeyeon_ss/",
            "spotify": "https://open.spotify.com/artist/3qNVuliS40BLgXGxhdBdqu"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800264/80026437.jpg"
    },
    "Taewan": {
        "names": {
            "KO": "태완",
            "EN": "Taewan"
        },
        "sns": {
            "instagram": "https://www.instagram.com/TAEWANAKACLUV/",
            "twitter": "https://twitter.com/TaewanakaCluv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800115/80011578.jpg"
    },
    "TAEYONG": {
        "names": {
            "KO": "태용",
            "EN": "TAEYONG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCXvI0Bi2dUi8pkScf0PcxHg",
            "instagram": "https://www.instagram.com/taeoxo_nct/",
            "spotify": "https://open.spotify.com/artist/6SKusTjOAPsTZ6kareKQdm"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802591/80259113.jpg"
    },
    "TAEIL": {
        "names": {
            "KO": "태일",
            "EN": "TAEIL"
        },
        "sns": {
            "instagram": "https://www.instagram.com/2taeil2/",
            "twitter": "https://twitter.com/BB_taeil",
            "spotify": "https://open.spotify.com/artist/2Xd4Jvq6x4z1K1Z4dKpWcI"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800979/80097988.jpg"
    },
    "Taecyeon": {
        "names": {
            "KO": "택연",
            "EN": "TAECYEON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCRX7AhiIgsKuVkVj4CrkjLA",
            "twitter": "https://twitter.com/taeccool",
            "instagram": "https://www.instagram.com/taecyeonokay/",
            "spotify": "https://open.spotify.com/artist/3bk5TbtyJDRrJ8lMQIzSPh"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800482/80048274.jpg"
    },
    "TEN": {
        "names": {
            "KO": "텐",
            "EN": "TEN"
        },
        "sns": {
            "instagram": "https://www.instagram.com/tenlee_1001/",
            "spotify": "https://open.spotify.com/artist/3Q5Qep7ytrjVleNnMnntgQ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802591/80259112.jpg"
    },
    "TEMPEST": {
        "names": {
            "KO": "템페스트",
            "EN": "TEMPEST"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCCViKQ1A1tXhIVKAVEazcaA",
            "instagram": "https://www.instagram.com/tpst__official/",
            "twitter": "https://twitter.com/TPST_twt",
            "fancafe": "https://cafe.daum.net/TPST.OFFICIAL",
            "spotify": "https://open.spotify.com/artist/1iyFL3CRuKW7PXgPH4VxSP"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803645/80364512.jpg"
    },
    "TXT": {
        "names": {
            "KO": "투모로우바이투게더",
            "EN": "TOMORROW X TOGETHER"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCtiObj3CsEAdNU6ZPWDsddQ",
            "instagram": "https://www.instagram.com/txt_bighit/",
            "twitter": "https://twitter.com/TXT_members",
            "spotify": "https://open.spotify.com/artist/0ghlgldX5Dd6720Q3qFyQB",
            "tiktok": "https://www.tiktok.com/@txt.bighitent"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803283/80328357.jpg"
    },
    "2NE1": {
        "names": {
            "ETC": "2NE1",
            "KO": "투애니원"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnsQjCVzmEd-YvlQZbo6zCg",
            "spotify": "https://open.spotify.com/artist/1l0mKo96Jh9HVYONcRl3Yp"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800549/80054982.jpg"
    },
    "2AM": {
        "names": {
            "ETC": "2AM",
            "KO": "투에이엠"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC69q_Edsjk-e_3fG0ntqu2A",
            "spotify": "https://open.spotify.com/artist/5SnaL8SsjGMHQNyqpa8Zos"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800464/80046463.jpg"
    },
    "2PM": {
        "names": {
            "ETC": "2PM",
            "KO": "투피엠"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCBpzJvEhkemwMOkYLq9yUsA",
            "instagram": "https://www.instagram.com/real_2pmstagram/",
            "twitter": "https://twitter.com/follow_2PM",
            "spotify": "https://open.spotify.com/artist/5iRPbkcPmqAFFwDUj6ywVS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800482/80048272.jpg"
    },
    "TRI.BE": {
        "names": {
            "KO": "트라이비",
            "EN": "TRI.BE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/tribedaloca/",
            "twitter": "https://twitter.com/tribedaloca",
            "fancafe": "https://cafe.daum.net/TRI.BE",
            "spotify": "https://open.spotify.com/artist/6BgYuNomEs12UIrnxhWE9a"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803507/80350731.jpg?version=296989&d=20210518115717"
    },
    "KIMDONGYUN": {
        "names": {
            "KO": "김동윤",
            "EN": "KIMDONGYUN"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/35FZ9B4qTOh8ewJy7JOOFj"
        },
        "imgUrl": ""
    },
    "TREASURE": {
        "names": {
            "KO": "트레저",
            "EN": "TREASURE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCx9hXYOCvUYwrprEqe4ZQHA",
            "instagram": "https://www.instagram.com/yg_treasure_official/",
            "twitter": "https://twitter.com/treasuremembers",
            "spotify": "https://open.spotify.com/artist/3KonOYiLsU53m4yT7gNotP",
            "tiktok": "https://www.tiktok.com/@yg_treasure_tiktok"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803435/80343530.jpg"
    },
    "TWICE": {
        "names": {
            "KO": "트와이스",
            "EN": "TWICE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCzgxx_DM2Dcb9Y1spb9mUJA",
            "instagram": "https://www.instagram.com/twicetagram/",
            "twitter": "https://twitter.com/JYPETWICE",
            "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
            "tiktok": "https://www.tiktok.com/@twice_tiktok_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802499/80249916.jpg"
    },
    "T-ARA": {
        "names": {
            "KO": "티아라",
            "EN": "T-ARA"
        },
        "sns": {
            "fancafe": "http://cafe.daum.net/fant-ara",
            "spotify": "https://open.spotify.com/artist/1R52cwGf75yTf7I3Q0Irf8"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800288/80028872.jpg"
    },
    "TRCNG": {
        "names": {
            "KO": "티알씨엔지",
            "EN": "TRCNG"
        },
        "sns": {
            "twitter": "https://twitter.com/TRCNG_official",
            "fancafe": "http://cafe.daum.net/officialTRCNG",
            "spotify": "https://open.spotify.com/artist/07Fxramv7R9p4IHJI7Oeqe"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802922/80292244.jpg"
    },
    "TAN": {
        "names": {
            "KO": "티에이엔",
            "EN": "TAN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCT2rz69ZOHlycGykGO0odrw",
            "instagram": "https://www.instagram.com/tan__official_/",
            "twitter": "https://twitter.com/tan__official_",
            "fancafe": "https://cafe.daum.net/officialtan",
            "spotify": "https://open.spotify.com/artist/34Ecdzh8yGKt2YvPG37PKu"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201553/20155367.jpg"
    },
    "TNX": {
        "names": {
            "KO": "티엔엑스",
            "EN": "TNX"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8Icvoedxf-HwIKm6o2Gzlg",
            "instagram": "https://www.instagram.com/official.tnx/",
            "twitter": "https://twitter.com/TNX_twt",
            "fancafe": "https://cafe.daum.net/TNX",
            "spotify": "https://open.spotify.com/artist/0DRiXmEOc6dJ6Rug3xi4HZ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803709/80370945.jpg"
    },
    "TO1": {
        "names": {
            "KO": "티오원",
            "EN": "TO1"
        },
        "sns": {
            "twitter": "https://twitter.com/TO1_members",
            "instagram": "https://www.instagram.com/to1_offcl/",
            "fancafe": "https://cafe.daum.net/TO1",
            "spotify": "https://open.spotify.com/artist/3a0xHIHQPhhzgSOJzgB2Rz",
            "tiktok": "https://www.tiktok.com/@to1_offcl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803528/80352878.jpg"
    },
    "T1419": {
        "names": {
            "KO": "티일사일구",
            "EN": "T1419"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC2dshAPWPLAOdNKl_Aglmhw",
            "instagram": "https://www.instagram.com/t1419_official/",
            "twitter": "https://twitter.com/T1419_official",
            "fancafe": "https://cafe.daum.net/T1419.OFFICIAL",
            "spotify": "https://open.spotify.com/artist/3uT0R5PsjP0k7NJ565Nqs4",
            "tiktok": "https://www.tiktok.com/@t1419_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/120841/12084128.jpg"
    },
    "TiffanyYoung": {
        "names": {
            "KO": "티파니 영",
            "EN": "Tiffany Young"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCSskZ5Xy7KIqauRYG_s-rLQ",
            "instagram": "https://www.instagram.com/tiffanyyoungofficial/",
            "twitter": "https://twitter.com/tiffanyyoung",
            "spotify": "https://open.spotify.com/artist/2lkCfFklQDBPlQzS4tR3VP",
            "tiktok": "https://www.tiktok.com/@tiffanyyoung"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803144/80314457.jpg"
    },
    "TEENTOP": {
        "names": {
            "KO": "틴탑",
            "EN": "TEENTOP"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCzIrJF-paJrXpvdYpS5LnTw",
            "instagram": "https://www.instagram.com/official_teentop/",
            "twitter": "https://twitter.com/teen_top",
            "fancafe": "http://cafe.daum.net/TEENTOP",
            "spotify": "https://open.spotify.com/artist/3offPqpKAKmpQkIdWnjzkc",
            "tiktok": "https://www.tiktok.com/@official_teentop"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800738/80073837.jpg"
    },
    "FANATICS": {
        "names": {
            "KO": "파나틱스",
            "EN": "FANATICS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCKzf9jkeeVuyC9hg5qHtQtg",
            "fancafe": "http://cafe.daum.net/FANATICS",
            "spotify": "https://open.spotify.com/artist/5DwSnklBZAfp2qXB6I6bCS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200881/20088169.jpg"
    },
    "Paloalto": {
        "names": {
            "KO": "팔로알토",
            "EN": "Paloalto"
        },
        "sns": {
            "instagram": "https://www.instagram.com/paloaltongue/",
            "spotify": "https://open.spotify.com/artist/2Yv0nlRtzgPl6u0dsS2hFv",
            "tiktok": "https://www.tiktok.com/@paloaltongue"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80080/8008012.jpg"
    },
    "PURPLEKISS": {
        "names": {
            "KO": "퍼플키스",
            "EN": "PURPLE KISS"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCor8nQnEdMs4eBcU-uVBQ8g",
            "twitter": "https://twitter.com/RBW_PURPLEKISS",
            "instagram": "https://www.instagram.com/purplekiss_official/",
            "fancafe": "http://cafe.daum.net/PURPLEKISS",
            "spotify": "https://open.spotify.com/artist/62T5PGHWJ9sxP2SJq20IHq",
            "tiktok": "https://www.tiktok.com/@rbw_purplekiss"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201207/20120727.jpg"
    },
    "Punch": {
        "names": {
            "KO": "펀치",
            "EN": "Punch"
        },
        "sns": {
            "instagram": "https://www.instagram.com/punchbaebae/",
            "spotify": "https://open.spotify.com/artist/2FgZrgTMX6Sk0VNcOsEPmm"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80596/8059652.jpg"
    },
    "Punchnello": {
        "names": {
            "KO": "펀치넬로",
            "EN": "Punchnello"
        },
        "sns": {
            "instagram": "https://www.instagram.com/fkuropinion/",
            "spotify": "https://open.spotify.com/artist/5enwJ9yOnKlCP91ov4Dqhv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200212/20021228.jpg"
    },
    "PENOMECO": {
        "names": {
            "KO": "페노메코",
            "EN": "PENOMECO"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCL7Qj7FCHEvvZE_3eqk8lmQ",
            "instagram": "https://www.instagram.com/penomadeincorea/",
            "spotify": "https://open.spotify.com/artist/1MAUqH0haKBYbjpknTfreY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802002/80200254.jpg"
    },
    "FAVORITE": {
        "names": {
            "KO": "페이버릿",
            "EN": "FAVORITE"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCpJTTbU6UUbaujM3wvm_4EA",
            "instagram": "https://www.instagram.com/favorite_official/",
            "twitter": "https://twitter.com/favorite_twt",
            "fancafe": "http://cafe.daum.net/official-story",
            "spotify": "https://open.spotify.com/artist/3o0wQ9s18mlYobc9ZqOs8i"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802863/80286346.jpg"
    },
    "PENTAGON": {
        "names": {
            "KO": "펜타곤",
            "EN": "PENTAGON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCw4NcAAtRsjL-cGlBrUnMTQ",
            "instagram": "https://www.instagram.com/CUBE_PTG/",
            "twitter": "https://twitter.com/CUBE_PTG",
            "fancafe": "http://cafe.daum.net/cube-pentagon",
            "spotify": "https://open.spotify.com/artist/1wKpMkucynaTfG8lyPprYV",
            "tiktok": "https://www.tiktok.com/@official_ptg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802696/80269668.jpg"
    },
    "4men": {
        "names": {
            "ETC": "4men",
            "KO": "포맨"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/7oFIkpNpLrTBgZW6w55W1J"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800162/80016236.jpg"
    },
    "4minute": {
        "names": {
            "ETC": "4minute",
            "KO": "포미닛"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC_Dm4o5UrbPr2uvM7VPUR6g",
            "spotify": "https://open.spotify.com/artist/6cdC1cwqh3eJAXaxXJt2jv"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800572/80057260.jpg"
    },
    "PaulKim": {
        "names": {
            "KO": "폴킴",
            "EN": "Paul Kim"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCFjKZImEGGPqOz7P9UZ0IlQ",
            "instagram": "https://www.instagram.com/pkalbum/",
            "fancafe": "http://cafe.daum.net/paulinlove",
            "spotify": "https://open.spotify.com/artist/4qRXrzUmdy3p33lgvJEzdv",
            "tiktok": "https://www.tiktok.com/@paulkim.official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801786/80178689.jpg"
    },
    "Peniel": {
        "names": {
            "KO": "프니엘",
            "EN": "Peniel"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCPtear1tL9P1gpnEDSgF05w",
            "instagram": "https://www.instagram.com/btobpeniel/",
            "twitter": "https://twitter.com/PenielShin",
            "spotify": "https://open.spotify.com/artist/21EUYgHJLDUeG72eDEmTx4"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801234/80123434.jpg"
    },
    "Primary": {
        "names": {
            "KO": "프라이머리",
            "EN": "Primary"
        },
        "sns": {
            "instagram": "https://www.instagram.com/primary0131/",
            "spotify": "https://open.spotify.com/artist/4QDcs3XrA8uHUZ7Xt9Ytep"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800244/80024472.jpg"
    },
    "fromis_9": {
        "names": {
            "KO": "프로미스나인",
            "EN": "fromis_9"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8qO5racajmy4YgPgNJkVXg",
            "instagram": "https://www.instagram.com/officialfromis_9/",
            "twitter": "https://twitter.com/realfromis_9",
            "fancafe": "http://cafe.daum.net/fromis9",
            "spotify": "https://open.spotify.com/artist/24nUVBIlCGi4twz4nYxJum"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200475/20047596.jpg"
    },
    "PRISTIN": {
        "names": {
            "KO": "프리스틴",
            "EN": "PRISTIN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCRvGVXlK9h9vLWpbVOzm_4Q",
            "fancafe": "http://cafe.daum.net/PRISTIN",
            "spotify": "https://open.spotify.com/artist/6VAphrHp0Oc88qg9BDaH9D"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200197/20019740.jpg"
    },
    "FLYTOTHESKY": {
        "names": {
            "KO": "플라이 투 더 스카이",
            "EN": "FLY TO THE SKY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC1Q-yGvMXZlOApifEXLskdQ",
            "instagram": "https://www.instagram.com/ftts_official/",
            "spotify": "https://open.spotify.com/artist/7rlMZAZYtRkjFg4HHhvYeC"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/12/1289.jpg"
    },
    "Flowsik": {
        "names": {
            "KO": "플로우식",
            "EN": "Flowsik"
        },
        "sns": {
            "instagram": "https://www.instagram.com/jayflowsik/",
            "twitter": "https://twitter.com/flowsik",
            "spotify": "https://open.spotify.com/artist/4N2CbwZ7ekytt9Oi5dh4Vq",
            "tiktok": "https://www.tiktok.com/@jayflowsik"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800998/80099856.jpg"
    },
    "pH-1": {
        "names": {
            "KO": "피에이치원",
            "EN": "pH-1"
        },
        "sns": {
            "instagram": "https://www.instagram.com/ph1boyyy/",
            "twitter": "https://twitter.com/ph1boyyy",
            "spotify": "https://open.spotify.com/artist/2u7CP5T30c8ctenzXgEV1W",
            "tiktok": "https://www.tiktok.com/@boyyyph1"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200086/20008679.jpg"
    },
    "P.O": {
        "names": {
            "KO": "피오",
            "EN": "P.O"
        },
        "sns": {
            "instagram": "https://www.instagram.com/pyojihoon_official/",
            "spotify": "https://open.spotify.com/artist/6mTcXVXmCixpsVnYDUpCnY"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800979/80097987.jpg"
    },
    "P1Harmony": {
        "names": {
            "KO": "피원하모니",
            "EN": "P1Harmony"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCe-XzQhLaq4zS_mPXzuc_2Q",
            "instagram": "https://www.instagram.com/p1h_official/",
            "twitter": "https://twitter.com/P1H_official",
            "spotify": "https://open.spotify.com/artist/3JjvsPeGMbDJqsphe2z8xU",
            "tiktok": "https://www.tiktok.com/@p1harmony"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803468/80346894.jpg"
    },
    "PIXY": {
        "names": {
            "KO": "픽시",
            "EN": "PIXY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCZU6KD96JWS89jQLuu7FhPQ",
            "twitter": "https://twitter.com/official_pixy",
            "instagram": "https://www.instagram.com/pixy_official_/",
            "fancafe": "https://cafe.daum.net/PIXY",
            "spotify": "https://open.spotify.com/artist/0CJkEzffVZLgav03xXeC9s"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/201265/20126583.jpg"
    },
    "PinkFantasy": {
        "names": {
            "KO": "핑크판타지",
            "EN": "Pink Fantasy"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCDdqxnt7CBryockG3DLAHug",
            "instagram": "https://www.instagram.com/pinkfantasy_official/",
            "twitter": "https://twitter.com/pinkfantasy_kr",
            "fancafe": "https://cafe.daum.net/PinkfantasyFan",
            "spotify": "https://open.spotify.com/artist/5syu5kN4a5f4rgMCRGlnZp"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200680/20068089.jpg"
    },
    "HASUNGWOON": {
        "names": {
            "KO": "하성운",
            "EN": "HA SUNG WOON"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCb5remY24kri9BHDrjJkbHg",
            "twitter": "https://twitter.com/gooreumseng",
            "instagram": "https://www.instagram.com/gooreumseng/",
            "fancafe": "https://cafe.daum.net/BPM.HASUNGWOON",
            "spotify": "https://open.spotify.com/artist/3OBkZ9NG8F0Fn4oNpg0yuU"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802884/80288438.jpg"
    },
    "Highlight": {
        "names": {
            "KO": "하이라이트",
            "EN": "Highlight"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCGdZ_-svzY_hPLYVSKvMFvw",
            "twitter": "https://twitter.com/Highlight_AUent",
            "instagram": "https://www.instagram.com/highlight_auent/",
            "spotify": "https://open.spotify.com/artist/3T0fMfxYBU3q9oAUAdPIsr"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802795/80279560.jpg"
    },
    "H1KEY": {
        "names": {
            "KO": "하이키",
            "EN": "H1-KEY"
        },
        "sns": {
            "instagram": "https://www.instagram.com/h1key_official/",
            "twitter": "https://twitter.com/H1KEY_official",
            "fancafe": "https://cafe.daum.net/H1-KEY",
            "spotify": "https://open.spotify.com/artist/5GwQwY63I9hrUUFlQB8FYU"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/124314/12431488.jpg"
    },
    "haha": {
        "names": {
            "KO": "하하",
            "EN": "HAHA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCK3p1wDoQYOkxi414EvBlLw",
            "twitter": "https://twitter.com/quanninomarley",
            "instagram": "https://www.instagram.com/quanhaha79/",
            "spotify": "https://open.spotify.com/artist/3lY2yvsj2BSiYSA8PcPGqF",
            "tiktok": "https://www.tiktok.com/@haha_official"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/435/43528.jpg"
    },
    "HaHyunWoo": {
        "names": {
            "KO": "하현우",
            "EN": "Ha Hyun Woo"
        },
        "sns": {
            "twitter": "https://twitter.com/guckkasten_v",
            "instagram": "https://www.instagram.com/vocal_hahyunwoo/",
            "spotify": "https://open.spotify.com/artist/5EXYPAGnOxvyTstoykxKd3"
        },
        "imgUrl": ""
    },
    "HanDongGeun": {
        "names": {
            "KO": "한동근",
            "EN": "Han Dong Geun"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCGCdG69Z-kLQeqPxBd2BwoQ",
            "instagram": "https://www.instagram.com/donny_donggeun_han/",
            "twitter": "https://twitter.com/_DONNY_HAN",
            "spotify": "https://open.spotify.com/artist/69K447yK7IW0NCZGEh79e1"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801402/80140261.jpg"
    },
    "HanSeungWoo": {
        "names": {
            "KO": "한승우",
            "EN": "Han Seung Woo"
        },
        "sns": {
            "instagram": "https://www.instagram.com/w_o_o_y_a/",
            "spotify": "https://open.spotify.com/artist/2RSsuFG2pkU9sGZ85UzFgl"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802714/80271488.jpg"
    },
    "YoHanHan": {
        "names": {
            "KO": "한요한",
            "EN": "Yo Han Han"
        },
        "sns": {
            "spotify": "https://open.spotify.com/artist/0yHrFzi7dWriMWhB5XA99P"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80642/8064265.jpg"
    },
    "hanhae": {
        "names": {
            "KO": "한해",
            "EN": "hanhae"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCsTjitDbkUW20H3U20ITqaw",
            "instagram": "https://www.instagram.com/hanhae1990/",
            "twitter": "https://twitter.com/hanhae90",
            "spotify": "https://open.spotify.com/artist/1CjHzclPOS2unF1vRtgurF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801092/80109267.jpg"
    },
    "HOTISSUE": {
        "names": {
            "KO": "핫이슈",
            "EN": "HOTISSUE"
        },
        "sns": {
            "instagram": "https://www.instagram.com/hotissue_s2/",
            "twitter": "https://twitter.com/HOTISSUE_S2",
            "fancafe": "https://cafe.daum.net/HOT.ISSUE",
            "spotify": "https://open.spotify.com/artist/16C7FRln711ggylepawmpq"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/803536/80353682.jpg"
    },
    "HA:TFELT": {
        "names": {
            "KO": "핫펠트",
            "EN": "HA:TFELT"
        },
        "sns": {
            "twitter": "https://twitter.com/HATFELT731",
            "instagram": "https://www.instagram.com/hatfelt/",
            "spotify": "https://open.spotify.com/artist/3Mrp5B6JdfoiObgY0WR8lF"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800221/80022184.jpg"
    },
    "HashSwan": {
        "names": {
            "KO": "해쉬스완",
            "EN": "Hash Swan"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCKZq309YKnWF-atFCL4cOgA",
            "instagram": "https://www.instagram.com/hashblanccoa/",
            "spotify": "https://open.spotify.com/artist/3yVEZNS0ateVfoj8FuazKg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802079/80207985.jpg"
    },
    "Hangzoo": {
        "names": {
            "KO": "행주",
            "EN": "Hangzoo"
        },
        "sns": {
            "instagram": "https://www.instagram.com/hangzoo/",
            "spotify": "https://open.spotify.com/artist/0m5ETFICJLAg6ageqa9FgZ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801189/80118903.jpg"
    },
    "HUHGAK": {
        "names": {
            "KO": "허각",
            "EN": "HUH GAK"
        },
        "sns": {
            "instagram": "https://www.instagram.com/huhgak1020/",
            "twitter": "https://twitter.com/huhgakzzang",
            "spotify": "https://open.spotify.com/artist/49vOeJAPxAz6YmVZPNM7ys"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800795/80079594.jpg"
    },
    "HeoYoungSaeng": {
        "names": {
            "KO": "허영생",
            "EN": "Heo Young Saeng"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC1hWRfBWKwTHatCW2j3t9mw",
            "instagram": "https://www.instagram.com/youngsaeng17/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800101/80010118.jpg"
    },
    "HuckleberryP": {
        "names": {
            "KO": "허클베리피",
            "EN": "Huckleberry P"
        },
        "sns": {
            "instagram": "https://www.instagram.com/huckleberryp84/",
            "twitter": "https://twitter.com/huckleberryp84",
            "spotify": "https://open.spotify.com/artist/4meeMnr8eLacsB31ApsXZS"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800683/80068303.jpg"
    },
    "Heize": {
        "names": {
            "KO": "헤이즈",
            "EN": "Heize"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCsXigGjbC_l4ttk-oahTfVg",
            "instagram": "https://www.instagram.com/heizeheize/",
            "twitter": "https://twitter.com/heize_official",
            "spotify": "https://open.spotify.com/artist/5dCvSnVduaFleCnyy98JMo"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801784/80178434.jpg"
    },
    "HENRY": {
        "names": {
            "KO": "헨리",
            "EN": "HENRY"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCSy5l865pfrmUCdpOyMqLpQ",
            "twitter": "https://twitter.com/henrylau89",
            "spotify": "https://open.spotify.com/artist/1sjw4xq2pAWy5Vdgba5QAt",
            "tiktok": "https://www.tiktok.com/@iamhenry"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800435/80043509.jpg"
    },
    "HYUK": {
        "names": {
            "KO": "혁",
            "EN": "HYUK"
        },
        "sns": {
            "instagram": "https://www.instagram.com/hsh0705/",
            "twitter": "https://twitter.com/HSangHyuk",
            "spotify": "https://open.spotify.com/artist/1WTpKxdwQrNsYW3MBJYwiG"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801279/80127907.jpg"
    },
    "HYUKOH": {
        "names": {
            "KO": "혁오",
            "EN": "HYUKOH"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCuvdmRlSWAlwB_rJZgg1cmQ",
            "instagram": "https://www.instagram.com/hyukohofficial/",
            "twitter": "https://twitter.com/hyukohh",
            "spotify": "https://open.spotify.com/artist/57okaLdCtv3nVBSn5otJkp"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802047/80204766.jpg"
    },
    "HyunA": {
        "names": {
            "KO": "현아",
            "EN": "HyunA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC0uTcuuOtUFwtn9aKUVGjXg",
            "instagram": "https://www.instagram.com/hyunah_aa/",
            "spotify": "https://open.spotify.com/artist/3UwlejyX2b458azZ7eCnHb",
            "tiktok": "https://www.tiktok.com/@hyunaofficial"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800572/80057265.jpg"
    },
    "Horan": {
        "names": {
            "KO": "호란",
            "EN": "Horan"
        },
        "sns": {
            "twitter": "https://twitter.com/zihadahl",
            "spotify": "https://open.spotify.com/artist/6458zvXJjZ1ukrrb6fJdqd"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800015/80001572.jpg"
    },
    "Hoshi": {
        "names": {
            "KO": "호시",
            "EN": "Hoshi"
        },
        "sns": {
            "instagram": "https://instagram.com/ho5hi_kwon/"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802323/80232314.jpg"
    },
    "HongDaeKwang": {
        "names": {
            "KO": "홍대광",
            "EN": "Hong Dae Kwang"
        },
        "sns": {
            "instagram": "https://www.instagram.com/dkhong4/",
            "twitter": "https://twitter.com/dkhong4",
            "spotify": "https://open.spotify.com/artist/6uzSh44SrjshRLiZ3qt8hp"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801377/80137710.jpg"
    },
    "EUNKI": {
        "names": {
            "KO": "홍은기",
            "EN": "EUNKI"
        },
        "sns": {
            "instagram": "https://www.instagram.com/eun_doitz/",
            "twitter": "https://twitter.com/eunki_official",
            "fancafe": "http://cafe.daum.net/eunki0929",
            "spotify": "https://open.spotify.com/artist/2MKcT836vEL1s5kJXJ9QNT"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802898/80289836.jpg"
    },
    "HONGJINYOUNG": {
        "names": {
            "KO": "홍진영",
            "EN": "HONGJINYOUNG"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCnXuSso6ypX2NVrl8_2TwfQ",
            "twitter": "https://twitter.com/Sambahong",
            "instagram": "https://www.instagram.com/sambahong/",
            "fancafe": "http://cafe.daum.net/sambahong",
            "spotify": "https://open.spotify.com/artist/5LwiBgLTllBUiqQGNiQ7jY",
            "tiktok": "https://www.tiktok.com/@sambahong85"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/80131/8013105.jpg"
    },
    "Fana": {
        "names": {
            "KO": "화나",
            "EN": "Fana"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCxGdHkGA3Li3QWehFUhvhyA",
            "instagram": "https://www.instagram.com/theuglygoblin/",
            "twitter": "https://twitter.com/TheUglyGoblin",
            "spotify": "https://open.spotify.com/artist/3A399xgcz2jtWhU31kZsHi"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800079/80007967.jpg"
    },
    "HwaSa": {
        "names": {
            "KO": "화사",
            "EN": "Hwa Sa"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCiM8arBZ-GyuBFG3wy6fEgw",
            "instagram": "https://www.instagram.com/_mariahwasa/",
            "spotify": "https://open.spotify.com/artist/7bmYpVgQub656uNTu6qGNQ"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801778/80177861.jpg"
    },
    "So!YoON!": {
        "names": {
            "KO": "황소윤",
            "EN": "So!YoON!"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UC8dcoiMpECoZqZheAuXlThg",
            "instagram": "https://www.instagram.com/sleeep__sheeep/",
            "spotify": "https://open.spotify.com/artist/7H5EC2qaylGun66YeRrVHg"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/802821/80282121.jpg"
    },
    "ChiYeulHwang": {
        "names": {
            "KO": "황치열",
            "EN": "ChiYeul Hwang"
        },
        "sns": {
            "instagram": "https://www.instagram.com/chiyeul7102/",
            "twitter": "https://twitter.com/ten7102",
            "fancafe": "http://cafe.daum.net/hwangchiyeol",
            "spotify": "https://open.spotify.com/artist/689wBe4v9rvHjdNB4JUgYq",
            "tiktok": "https://www.tiktok.com/@hcy7102"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800206/80020677.jpg"
    },
    "HYOLYN": {
        "names": {
            "KO": "효린",
            "EN": "HYOLYN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCNJofNT5w33_mycys970x8g",
            "twitter": "https://twitter.com/officialHyolyn_",
            "instagram": "https://www.instagram.com/xhyolynx/",
            "fancafe": "http://cafe.daum.net/hyolynofficial",
            "spotify": "https://open.spotify.com/artist/78sJswwVn4P8aEhkF4K6fQ",
            "tiktok": "https://www.tiktok.com/@_hyolyn_"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800696/80069634.jpg"
    },
    "HYOMIN": {
        "names": {
            "KO": "효민",
            "EN": "HYOMIN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCGhQalMRXMv-mqChwAZQyyA",
            "instagram": "https://www.instagram.com/hyominnn/",
            "twitter": "https://twitter.com/b89530",
            "spotify": "https://open.spotify.com/artist/1K8kkeM8j0BL8sQ4aR7Vh6"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800582/80058295.jpg"
    },
    "HYOYEON": {
        "names": {
            "KO": "효연",
            "EN": "HYOYEON"
        },
        "sns": {
            "instagram": "https://www.instagram.com/hyoyeon_x_x/",
            "twitter": "https://twitter.com/Hyoyeon_djhyo",
            "spotify": "https://open.spotify.com/artist/0B3I6YgdnfXehUCpsO6oB8"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/800264/80026439.jpg"
    },
    "Hoody": {
        "names": {
            "KO": "후디",
            "EN": "Hoody"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCxt4QQG5aixcKfOwxyYhxRQ",
            "twitter": "https://twitter.com/hoodykim",
            "instagram": "https://www.instagram.com/hoodykim/",
            "spotify": "https://open.spotify.com/artist/7lXgbtBDcCRbfc5f8FhGUL"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801681/80168161.jpg"
    },
    "Realslow": {
        "names": {
            "KO": "휘성",
            "EN": "Realslow"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCS9uMkZehofiwCx7WcvOIPA",
            "spotify": "https://open.spotify.com/artist/7luxe2wCwtDtkKSP8ZhPLn"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/312/31236.jpg"
    },
    "WheeIn": {
        "names": {
            "KO": "휘인",
            "EN": "Whee In"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCXOMKEPp0CALdBSPkReI5BQ",
            "instagram": "https://www.instagram.com/whee_inthemood/",
            "spotify": "https://open.spotify.com/artist/0BqRGrwqndrtNkojXiqIzL"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/801778/80177862.jpg"
    },
    "HINAPIA": {
        "names": {
            "KO": "희나피아",
            "EN": "HINAPIA"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCFcmN6MJ1cAEKU3zZ317uHg",
            "twitter": "https://twitter.com/HINAPIAofficial",
            "instagram": "https://www.instagram.com/hinapia_official/",
            "fancafe": "http://cafe.daum.net/HINAPIA/",
            "spotify": "https://open.spotify.com/artist/6bWaRj4L4PyJ4uv2wN47Ny"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200942/20094236.jpg"
    },
    "hynn": {
        "names": {
            "KO": "흰",
            "EN": "HYNN"
        },
        "sns": {
            "youtube": "https://www.youtube.com/channel/UCYqrMvzivB3xHHe2eoVrORw",
            "instagram": "https://www.instagram.com/hynn_01/",
            "spotify": "https://open.spotify.com/artist/64jfAecBriamQmMs0WAKtj"
        },
        "imgUrl": "https://image.bugsm.co.kr/artist/images/1000/200730/20073083.jpg"
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: global.data });
});

module.exports = router;
