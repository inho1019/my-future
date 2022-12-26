/*  
    ty = 
    1.노잼
    2.에이스
    3.싸이코
    4.꿀벌
    5.폐급
    
    level =
    1.신병/이병
    2.일병
    3.상병
    4.병장
        */
const queanw = [
    //여자
    { dumq : [ 
        {que : "공군의 복무 개월수는?", 
        duma : [ 
            {anw : '16개월', fkty : 1 }, 
            {anw : '18개월', fkty : 1 },
            {anw : '20개월', fkty : 1 },
            {anw : '21개월', fkty : 0 }
        ]},
        {que : "우리의 주적은 누구인가?", 
        duma : [ 
            {anw : '북한', fkty : 1 }, 
            {anw : '중국', fkty : 1 },
            {anw : '간부', fkty : 0 },
            {anw : '김정은', fkty : 1 }
        ]},
        {que : "다음중 중위보다 계급상 낮은 계급은?", 
        duma : [ 
            {anw : '대위', fkty : 1 }, 
            {anw : '상사', fkty : 0 },
            {anw : '소령', fkty : 1 },
            {anw : '준장', fkty : 1 }
        ]}
    ] },
    //미필
    { dumq : [ 
        {que : "현역병 육군 훈련소 입영 요일은 언제인가??", 
        duma : [ 
            {anw : '월요일', fkty : 0 }, 
            {anw : '화요일', fkty : 2 },
            {anw : '목요일', fkty : 2 },
            {anw : '금요일', fkty : 2 }
        ]},
        {que : "훈련소에서 사용하는 연습용 수류탄의 색깔은?", 
        duma : [ 
            {anw : '파란색', fkty : 0 }, 
            {anw : '빨간색', fkty : 2 },
            {anw : '노란색', fkty : 2 },
            {anw : '초록색', fkty : 2 }
        ]},
        {que : "싸리비는 무엇인가?", 
        duma : [ 
            {anw : '쓰레기', fkty : 2 }, 
            {anw : '슬리퍼', fkty : 2 },
            {anw : '빗자루', fkty : 0 }
        ]}
    ] },
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [0,4], level : 'none'}, 
            {anw : '그 선임과 친해진다', ty : [1,3], level : 'none'},
            {anw : '참고 버틴다', ty : [0,2], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [2,4], level : 'none'}
        ]},
    {
        que : "군대의 야심한밤 잠이오지 않는다. 무슨 생각을 하는가?", 
        rela : [ 
            {anw : '훈련하는 상상을 한다', ty : [1,2], level : 'none'}, 
            {anw : '나를 괴롭힌 선임에 대해 생각한다', ty : [2,4], level : 'none'},
            {anw : '야한 생각을 한다', ty : [0,4], level : 'none'},
            {anw : '사회에 대한 생각을 한다', ty : [0,3], level : 'none'}
        ]},
    {
        que : "아침에 기상 나팔이 울렸다. 어떻게 행동할 것인가?", 
        rela : [ 
            {anw : '졸린데 더 잔다', ty : 'none', level : [3]}, 
            {anw : '일어나서 환복한다', ty : 'none', level : [1]},
            {anw : '준비후 자고 있는 인원들을 깨운다', ty : 'none', level : [0]},
            {anw : '그냥 누워있는다', ty : 'none', level : [2]}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]},
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [1,5], level : 'none'}, 
            {anw : '그 선임과 친해지다', ty : [2,4], level : 'none'},
            {anw : '참고 버틴다', ty : [1,3], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [3,5], level : 'none'}
        ]}
]