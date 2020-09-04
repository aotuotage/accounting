let constitution1 = {
  data: [{
    label: '宪法',
    children: [{
      label: '宪法的概念',
      id: '1'
    },
    {
      label: '宪法宣誓制度',
      id: '2'
    },{
      label: '新中国宪法的历史',
      children: [{
        label: '前四次《宪法修正案》',
        id: '3'
      },{
        label: '2018年第五次《宪法修正案》',
        id: '3'
      }]
    },{
      label: '国家制度',
      children: [{
        label: '国体',
        id: '4'
      },{
        label: '政党制度和政协制度',
        id: '4'
      },{
        label: '政体',
        id: '4'
      },{
        label: '选举制度的基本原则',
        id: '4'
      },{
        label: '民族区域自治制度',
        id: '4'
      },{
        label: '特别行政区制度',
        id: '5'
      },{
        label: '基本经济制度',
        id: '5'
      },{
        label: '基本群众自治制度',
        id: '5'
      }]
    },{
      label: '公民的基本权利',
      id: '6'
    },{
      label: '国家机构',
      children: [{
        label: '全国人民代表大会',
        id: '7'
      },{
        label: '国务院',
        id: '7'
      },{
        label: '全国人大常委会',
        id: '7'
      },{
        label: '人大代表',
        id: '8'
      },{
        label: '监察委员会',
        id: '8'
      }]
    }]
  }],
  node: [{
      text:`
      <h3>1.宪法的概念</h3>
      <p>宪法是具有最高法律效力的国家根本法。它规定国家的根本制度和根本任务，保障公民的基本权利，集中体现各种政治力量对比关系。</p>
      <p>宪法是其他法律的立法基础和立法依据。其他法律是根据宪法制定的，是宪法的具体化。</p>
      `,
      id:'id1',
      matching: [{
        text: '最高法律效力',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '国家根本法',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '根本制度',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '根本任务',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '基本权利',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '立法基础',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '立法依据',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '根据宪法制定的',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '宪法的具体化',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '政治力量',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      }],
      test: [
        {
          title: '关于《中华人民共和国宪法》的地位，下列说法不正确的是',
          answer:['A.宪法在我国法律体系中居首要地位','B.宪法是人民权利的保障书',
          'C.其他法律是宪法的基础，是宪法的具体化',
          'D.宪法是最高的行为准则'],
          correct:2,
          analysis:'宪法是其他法律的立法基础和立法依据',
          link:''
        },
        {
          title: '下列说法中，不正确的是',
          answer:['A.宪法的变动必然会引起普通法律随之做出相应的改变','B.宪法是国家所有法律的总和',
          'C.宪法具有最高的法律效力',
          'D.宪法是国家的根本大法'],
          correct:1,
          analysis:'宪法是其他法律的立法基础不是全部',
          link:''
        }
      ]
    },
    {
      text:`
      <h3>2.宪法宣誓制度</h3>
      <p>2015年7月1日，第十二届全国人民代表大会常务委员会第十五次会议表决通 过实行宪法宣誓制度的决定。2018年2月24日,全国人大常委会对宪法宣誓制度 作出修订，新的誓词为：“我宣誓：忠于中华人民共和国宪法，维护宪法权威，履 行法定职责，忠于祖国、忠于人民，恪尽职守、廉洁奉公，接受人民监督，为建设 富强民主文明和谐美丽的社会主义现代化强国努力奋斗！”</p>
      <p>口诀：三个忠于一个建设</p>
      <p>宣誓仪式根据情况，可以采取单独宣誓或者集体宣誓的形式。</p>
      <p>单独宣誓时，宣誓人应当左手抚按《中华人民共和国宪法》，右手举拳，诵读誓词。</p>
      <p>集体宣誓时，由一人领誓，领誓人左手抚按《中华人民共和国宪法》，右手举拳，领诵誓词；其他宣誓人整齐排列，右手举拳，跟诵誓词。</p>
      <p>宣誓场所应当庄重、严肃，悬挂中华人民共和国国旗或者国徽。宣誓仪式应当奏唱中华人民共和国国歌。</p>
      `,
      id:'id2',
      matching: [{
        text: '2015年7月1日',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '2018年2月24日',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '我宣誓：忠于中华人民共和国宪法，维护宪法权威，履 行法定职责，忠于祖国、忠于人民，恪尽职守、廉洁奉公，接受人民监督，为建设 富强民主文明和谐美丽的社会主义现代化强国努力奋斗！',
        style: 'display:inline-block;background:#FF6600;color:#ffffff;'
      },{
        text: '悬挂中华人民共和国国旗或者国徽',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '宣誓仪式应当奏唱中华人民共和国国歌',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      }],
      test: [
        {
          title: '关于我国宪法宣誓制度，下列说法错误的是',
          answer:['A.宣誓仪式应当采取集体宣誓的形式','B.宣誓仪式应当奏唱中华人民共和国国歌',
          'C.人民法院、人民检察院任命的国家工作人员，在就职时应当公开进行宪法宣誓',
          'D.全国人民代表大会选举产生的人员，在依照法定程序产生后，进行宪法宣誓'],
          correct:0,
          analysis:'宣誓仪式根据情况，可以采取单独宣誓或者集体宣誓的形式。',
          link:''
        }
      ]
    },
    {
      text:`
      <h3>3.新中国宪法的历史</h3>
      <p>新中国先后颁布了一个宪法性文件和四部宪法，即《中国人民政治协商会议共 同纲领》
      （中国人民政协会议第一次全体会议通过，是一部具有根本大法性质的临 时宪法）、1954年宪法、1975年宪法、1978年宪法、1982年宪法。</p>
      <p>五次《宪法修正案》：1988年修正案、1993年修正案、1999年修正案、2004 年修正案、2018年修正案。</p>
      <p>1988,基本经济制度:（1）私经补充，保合法权益，国家引、监、管；（2）土地使用权转让</p>
      <p>1993,基本政治制度:（1）正处初级、中国特色，改革开放；（2）多党合作，政治协商。
      <br>基本经济制度：（3）国营改国有；（4）家庭 联产承包责任制；（5）实行 社会主义市场经济；集体 独立，民主管理
      <br>其他：（6）县三改五（县人大代表三年改五年）</p>
      <p>1999,基本政治制度:（1）长期初级，沿着 建设有特色道路，邓 小平理论；（2）法治 国家
      <br>基本经济制度:（3）发展社会主义市场经 济，按劳为主，多种分配并 存；（4）统分结合；
      （5）个 私重要，保合法权益，国家引、监、管。其他：（6）“反革命”改为“危害国 家安全”</p>
      <p>2004,基本政治制度:（1）沿着特色，''三个 代表”；（2）政治文 明；（3）社会主义事 业建设者
      基本经济制度：（4）	土地征收征用并补偿；（5）	非公经济保合法权益， 国家鼓、支、引,依法 监管
      其他：（6）保护合法私有财权，征收 征用并补偿；（7）社保制度；
      （8）人权；（9）特区人大代 表；（10） “戒严”改为“紧急 状态”；（11）主席国事活动； （12）乡三改五；（13）增国歌
      </p>
      <p>前四次《宪法修正案》口诀：1988年：私营土地可转让。1993年：初级特色市场立，五县联产政协制。
      1999年：法治邓论分配多，私营统分反革命。
      2004年：三个代表乡里变，社保人权土地偿。</p>
      <p>（二）2018年第五次《宪法修正案》</p>
      <p>2018,<br>①在马列毛邓三科习近平新时代中国 特色社会主义思想指引下
      <br>②和谐美丽现代化强国/伟大复兴
      <br>③致力于复兴的爱国者
      <br>④平等团结互助和谐民族关系
      <br>⑤倡导社会主义核心价值观
      <br>⑥宪法和法律委员会
      <br>⑦和平发展/互利共赢/命运共同体
      <br>⑧共产党领导最本质
      <br>9.增就职要宣誓</p>
      <p>⑩删主席副主席不超两届
      <br>⑪设区的市可定地方性法规
      <br>⑫增监察委员会
      <br>⑬增人大产生监察机关
      <br>⑭删国务院/县以上政府监察职能
      <br>⑮增人大常委监督监察委职能
      <br>⑯增人大选举并罢免监察委主任职能
      <br>⑰增人大常委会任免国家监察委副主任/委员职能
      <br>⑱增人大常委不得担任监察机关职务
      ⑲“法制”变“法治”</p>
      `,
      id:'id3',
      matching: [{
        text: '增人大常委不得担任监察机关职务',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '“法制”变“法治”',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '私营土地可转让',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '《中国人民政治协商会议共 同纲领》',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },,{
        text: '马列毛邓三',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '复兴的爱国者',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '平等团结互助和谐',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '社会主义核心价值观',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '命运共同体',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '共产党领导最本质',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '人大选举并罢免监察委主任职能',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '增人大常委监督监察委职能',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '删主席副主席不超两届',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '和谐美丽现代化',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '习近平新时代',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },,{
        text: '乡三改五',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '增国歌',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '1954年宪法',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '1975年宪法',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '1978年宪法',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '1982年宪法',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '1988年修正案',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '1993年修正案',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '1999年修正案',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '2004 年修正案',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '2018年修正案',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '国家引、监、管',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '土地使用权转让',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '正处初级、中国特色，改革开放',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '多党合作，政治协商',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '家庭 联产承包责任制；',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '实行 社会主义市场经济',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '私经补充',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '法治 国家',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      }],
      test: [
        {
          title: '根据我国《宪法》规定，地方各级人民代表大会每届任期',
          answer:['A.3年','B.5年',
          'C.8年',
          'D.10年'],
          correct:1,
          analysis:'县三改五',
          link:''
        },
        {
          title: '根据《宪法》规定，国家为了公共利益的需要，可以依照法律 规定对土地实行征收或者征用并给予',
          answer:['A.补偿','B.赔偿',
          'C.补贴',
          'D.置换'],
          correct:0,
          analysis:'2004（4）土地征收征用并补偿；',
          link:''
        },
        {
          title: '中国共产党领导是中国特色社会主义最本质的特征。',
          answer:['A.正确','B.错误'],
          correct:0,
          analysis:'⑧共产党领导最本质',
          link:''
        },
        {
          title: '2018年3月11日，十三届全国人大一次会议通过了',
          answer:['A.中华人民共和国刑法修正案','B.宪法修正案',
          'C.民法修正案',
          'D.教育法修正案'],
          correct:1,
          analysis:'宪法修正案',
          link:''
        },
        {
          title: '我国现行宪法是1982年12月4日第五届全国人民代表大会第五次会议通过的，截止到2018年3月底，我国一共公布了（	）次《中华人民共和国宪法修正案》，对《中华人民共和国宪法》进行了修改',
          answer:['A.3','B.5',
          'C.6',
          'D.4'],
          correct:1,
          analysis:'共5次',
          link:''
        }
      ]
    },
    {
      text:`
      <h3>4.国家制度</h3>
      <p>(1)国体：人民民主专政：指中国共产党领导的人民民主政权在人民内部实行民主，对境 内外敌对势力和犯罪分子实行专政。（区别：人民和公民）</p>
      <p>境内外敌对势力：（1）民族分裂势力；（2）宗教极端势力；（3）国际恐怖主 义势力。</p>
      <p>国家性质：《宪法》第1条：中华人民共和国是工人阶级领导的、以工农联盟 为基础的人民民主专政的社会主义国家。</p>
      <p>(2)政党制度和政协制度</p>
      <p>共产党是执政党，民主党派是参政党，中国共产党同各民主党派合作的十六字 方针是“长期共存、互相监督、肝胆相照、荣辱与共”。</p>
      <p>中国人民政治协商会议（简称人民政协）是中国人民爱国统一战线的组织，是 中国共产党领导的多党合作和政治协商的重要机构。</p>
      <p>中华人民共和国实行的政党制度：共产党领导的多党合作政协制度。</p>
      <p>(3)整体</p>
      <p>1.人民代表大会制度是中国人民民主专政的政权组织形式，是中国的根本政治 制度。</p>
      <p>2.中华人民共和国的一切权力属于人民。</p>
      <p>3.全国人大是最高国家权力机关；地方各级人大是地方国家权力机关；人民行 使国家权力的机关是全国人大和地方各级人大</p>
      `,
      id:'id4',
      matching: [{
        text: '境 内外敌对势力',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '犯罪分子',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '人民和公民',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '民族分裂势力',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '宗教极端势力',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '国际恐怖主 义势力',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '执政党',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '参政党',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '长期共存、互相监督、肝胆相照、荣辱与共',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '爱国统一战线',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '人民代表大会制度',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '一切权力属于人民',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '最高国家权力机关',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      }],
      test: [
        {
          title: '我国宪法规定，社会主义制度是我国的',
          answer:['A.根本制度','B.基本制度',
          'C.政体制度',
          'D.宪法是最高的行为准特有制度则'],
          correct:0,
          analysis:'1.人民代表大会制度是中国人民民主专政的政权组织形式，是中国的根本政治 制度。',
          link:''
        },
        {
          title: '我国的根本政治制度是',
          answer:['A.人民民主专政','B.人民代表大会制度',
          'C.基层群众自治制度',
          'D.共产党领导的多党合作和政治协商制度'],
          correct:1,
          analysis:'人民代表大会制度',
          link:''
        }
      ]
    },
    {
      text:`
      <h3>4.选举制度的基本原则</h3>
      <p>选举制度：1普遍性原则，2平等原则，3直接选举和间接选举并用原则，4秘密投票原则</p>
      <p>口诀：普遍平等与秘密，公民十八有权利，直接间接选县为界，城乡同票一比一</p>
      <p>1.普遍性原则</p>
      <p>享有选举权的基本条件
      <br>1.中国公民
      <br>2.年满十八周岁
      <br>3.未被剥夺政治权利
      </p>
      <p>2.平等原则<br>
      1.每个选民只能在一个地方有一个投票权。不承认任何选民因民族、职业、财产状况、家庭出身、居住情况的不同而享有 特权。
      <br>(2)更加着眼于实质上的平等。实行同票同权原则，每一代表所代表的城乡人口数相同(2010年3月14日， 十一届全国人大三次会议表决通过了关于修改选举法的决定，我国农村和城市每一 名全国人大代表所代表的人口数比例规定为1 ：1)。
      </p>
      <p>3.直接选举和间接选举并用原则</p>
      <p>(1)间接选举：全国人民代表大会代表，省、自治区、直辖市、设区的市、自 治州的人民代表大会代表，由下一级人民代表选出。</p>
      <p>(2)直接选举：不设区的市、市辖区、县、自治县、乡、民族乡、镇的人民代 表大会代表，由选民直接选出。根据《选举法》规定，在选民直接选举人民代表大 会代表时，选区全体选民的过半数参加投票，选举有效。代表候选人获得参加投票 的选民过半数的选票时，始得当选。</p>
      <p>3.县级以上地方各级人大职权</p>
      <p>a.选举本级人民代表大会常务委员会的组成人员；
      <br>b.选举省长、副省长，自治区主席、副主席，市长、副市长，州长、副州长， 县长、副县长，区长、副区长；
      <br>c.选举本级人民法院院长和人民检察院检察长。
      </p>
      <p>4.秘密投票原则</p>
      <p>
      （1）无记名投票；
       (2）同意、不同意、弃权、另选他人
      （3）不能亲自书写的可以委托他人代写。
      </p>
      `,
      id:'id1',
      matching: [{
        text: '秘密',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '中国公民',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '年满十八周岁',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '剥夺政治权利',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '同票同权原则',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '间接选举',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '直接选举',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '不设区的市',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '市辖区',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '全国人民代表大会代表',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '过半数参加投票',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '选民过半数的选票时',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '选举本级',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '选举省长、副省长，自治区主席、副主席，市长、副市长，州长、副州长， 县长、副县长，区长、副区长',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      }],
      test: [
        {
          title: '(不定项)2010年3月闭幕的十一届全国人大三次会议表决通过了修改选举法的决定。下列选项中，属于本次选举法修改后新增内容的是',
          answer:['A.恢复间接选举中的预选','B.恢复直接选举中的预选',
          'C.规定城乡按相同人口比例选举人大代表',
          'D.规定直接选举中选区的大小，按每一选区选一至三名代表划分'],
          correct:2,
          analysis:'规定城乡按相同人口比例选举人大代表',
          link:''
        },
        {
          title: '某选区在举行人民代表大会代表直接选举时，应参加选举的 选民为25000人，实际参加选举的选民为12350人。该选区三位候选人甲、乙、丙 最后实际获得选票依次为6250票、3500票、2600票。按照法律规定，选举结果是',
          answer:['A.甲当选','B.乙当选',
          'C.丙当选',
          'D.三人均不得当选'],
          correct:3,
          analysis:'两个过半',
          link:''
        },
        {
          title: '下列人员中，通常由县级以上地方各级人民代表大会选举产 生的是',
          answer:['A.局长、厅长、委员会主任','B.副局长、副厅长、委员会副主任',
          'C.人民法院副院长、人民检察院副检察长',
          'D.副省长、副市长、副州长、副县长、副区长'],
          correct:3,
          analysis:'选举省长、副省长，自治区主席、副主席，市长、副市长，州长、副州长， 县长、副县长，区长、副区长',
          link:''
        }
      ]
    },
    {
      text:`
      <h3>5.民族区域自治制度</h3>
      <p>自治机关包括：1.自治区。2.自治州。3.自治县。4.人民代表大会。(不包括人大常委)5.政府</p>
      <p>注：民族乡不是自治地方。自治地方的法院、	检察院不是自治机关。</p>
      <p>1.民族特色</p>
      <p>《宪法》第114条规定，自治区主席、自治州州长、自治县县长由实行区域自 治的民族的公民担任。</p>
      <p>《宪法》第113条第2款规定，自治区、自治州、自治县的人民代表大会常务 委员会中应当有实行区域自
      治的民族的公民担任主任或者副主任。(有一个自治公民就行)</p>
      <p>2.民族自治地方自治机关的自治权</p>
      <p>
      (1)民族立法权；(需要全国人大批准)<br>
      (2)变通执行权；(需要全国人大批准)<br>
      (3)财政经济自主权；
      (4)文化、语言文字自主权；
      (5)组织公安部队权；(必须要国务院批准)
      (6)少数民族干部具有任用优先权。
      </p>
      `,
      id:'id1',
      matching: [{
        text: '自治地方',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '不是自治机关',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '自 治的民族的公民担任',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '主任或者副主任',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '民族立法权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '变通执行权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '必须要国务院批准',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '任用优先权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      }],
      test: [
        {
          title: '下列职位中，不需要必须由实行区域自治的民族的公民担任的是',
          answer:['A.自治区主席','B.自治区人大常委会主任',
          'C.自治州州长',
          'D.自治县县长'],
          correct:1,
          analysis:'《宪法》第113条第2款规定，自治区、自治州、自治县的人民代表大会常务 委员会中应当有实行区域自治的民族的公民担任主任或者副主任。(有一个自治公民就行)',
          link:''
        },
        {
          title: '民族区域自治地方的自治机关是自治区、自治州、自治县的',
          answer:['A.人民代表大会人民代表大会常务委员会','B.人民代表大会常务委员会人民政府',
          'C.人民代表大会人民政府',
          'D.人民代表大会常务委员会人民检察院'],
          correct:2,
          analysis:'人民代表大会人民政府',
          link:''
        }
      ]
    },
    {
      text:`
      <h3>6.特别行政区制度</h3>
      <p>1.全国人大：</p>
      <p>(1)决定特别行政区的设立及其制度；<br>
      (2)制定并修改特别行政区基本法的专属权；<br>
      (3)《香港特别行政区基本法》第2条规定，全国人民代表大会授权香港特别 行政区依照本法的规定实行高度自治，享有行政管理权、立法权、独立的司法权和 终审权。
      </p>
      <p>2.全国人大常委会</p>
      <p>
      (1)对基本法的解释权；<br>
      (2)特区立法的备案审查权(特区立法会制定的法律只须报全国人大常委会备 案，常委会认为有问题，可以发回，但不能撤销)；<br>
      (3)特区进入紧急状态的决定权。<br>
      口诀：人大设区定制度7制修基法它专属，常委释法加审查
      </p>
      <p>3.国务院</p>
      <p>(1)负责管理与特区有关的外交事务；<br>
      (2)管理特区的防务；<br>
      (3)任命特区行政长官及其他主要行政官员；<br>
      (4)任命澳门检察院检察长。
      <h3>7.基本经济制度</h3>
      <p>1.我国的经济制度</p>
      <p>(1）我国以公有制经济为主体，非公有制经济是社会主义市场经济的重要组成 部分。</p>
      <p>（2）公有制经济包括全民所有制、集体所有制和混合所有制中的国有和集体成 分。非公有制经济：个体经济、私营经济和三资企业（鼓励、支持、引导、监督和 管理）。</p>
      <p>2.自然资源归属</p>
      <p>国家所有：矿藏、水流、城市的土地。</p>
      <p>集体所有：宅基地、自留地、自留山。</p>
      <p>口诀：水矿城土归国有，集体宅山地自留</p>
      <h3>8.基层群众自治制度</h3>
      <p>1.性质：村委会是村民自我管理、自我教育、自我服务的基层群众性自治组织。</p>
      <p>2.村民自治的核心内容是“四个民主”，即民主选举、民主决策、民主管理、 民主监督。</p>
      <p>口诀：政府村委会指导与协助</p>
      `,
      id:'id5',
      matching: [{
        text: '民主选举',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '民主决策',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '民主管理',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '民主监督',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '政府村委会指导与协助',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '基层群众性自治组织',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '水矿城土归国有，集体宅山地自留',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '决定特别行政区',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '制定并修改',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '高度自治',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '行政管理权',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '立法权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '独立的司法',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '终审权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '对基本法的解释权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '备案审查权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '决定权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '外交事务',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '特区的防务',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '任命特区行政长',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '澳门检察院检察长',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '公有制经济为主体',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '全民所有制',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '集体所有制',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '混合所有制中的国有和集体成 分',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '个体经济',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '私营经济',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '三资企业',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      }],
      test: [
        {
          title: '我国特别行政区制度的基本内容有',
          answer:['A.特区政府主要官员由中央政府任命','B.自行发行货币',
          'C.全国人大授权实行高度自治',
          'D.实行独立的税收制度'],
          correct:2,
          analysis:'全对，国务院任命特区行政长，人大授予其他三项权利',
          link:''
        },
        {
          title: '社会主义经济制度的基础是',
          answer:['A.公有制','B.国有经济',
          'C.集体经济',
          'D.公有制和非公有制'],
          correct:0,
          analysis:'我国以公有制经济为主体，非公有制经济是社会主义市场经济的重要组成 部分。',
          link:''
        },
        {
          title: '根据我国《宪法》规定，下列自然资源不能属于集体所有的 是',
          answer:['A.森林','B.草原',
          'C.水流',
          'D.荒地'],
          correct:2,
          analysis:'水矿城土归国有，集体宅山地自留',
          link:''
        },
        {
          title: '根据宪法和物权法规定，下列自然资源中既可属于国家所有也可属于集体所有的是',
          answer:['A.矿藏','B.土地',
          'C.水流',
          'D.海洋'],
          correct:1,
          analysis:'水矿城土归国有，集体宅山地自留(城市土地归国有，农村归集体)',
          link:''
        },
        {
          title: '我国的基层群众自治性组织，包括',
          answer:['A.居民委员会','B.村民委员会',
          'C.高校学生会',
          'D.乡人民政府'],
          correct:0,
          analysis:'A.居民委员会B.村民委员会',
          link:''
        }
      ]
    },
    {
      text:`
      <h3>五、公民的基本权利</h3>
      <p>1.平等权:平等权包括司法平等和守法平等。</p>
      <p>2.政治权利和自由</p>
      <p>（1）选举权和被选举权（公民参加国家管理的一项最基本的政治权利）。<br>
      （2）政治自由，包括言论、出版、集会、结社、游行、示威的自由。<br>
      (3)被剥夺政治权利不得担任国家公务员与企事业单位领导职务。
      </p>
      <p>3.监督权和取得赔偿权</p>
      <p>监督权包括批评、建议权，控告、检举、申诉权。</p>
      <p>《宪法》第41条第1款：中华人民共和国公民对于任何国家机关和国家工作人
      员，有提出批评和建议的权利；对于任何国家机关和国家工作人员的违法失职行为，
      有向有关国家机关提出申诉、控告或者检举的权利，但是不得捏造或者歪曲事实进 行诬告陷害。
      </p>
      <p>4.宗教信仰自由</p>
      <p>法律规定公民享有宗教信仰自由，即公民依据内心的信念，自愿地信仰宗教的 自由。宗教信仰自由作为一种权利体系，主要由信仰的自由、宗教活动自由、宗教 仪式自由构成。</p>
      <p>5.人身自由</p>
      <p>《宪法》第37条：“中华人民共和国公民的人身自由不受侵犯。任何公民，非 经人民检察院批准或者决定或者人民法院决定，并由公安机关执行，不受逮捕。禁 止非法拘禁和以其他方法非法剥夺或者限制公民的人身自由，禁止非法搜查公民的 身体。”</p>
      <p>(1)生命权。</p>
      <p>(2)公民的肉体不受非法侵犯，不受非法限制、搜查、拘留和逮捕。</p>
      <p>(3)人格尊严不受侵犯(姓名权、肖像权、名誉权、荣誉权和隐私权)。</p>
      <p>《民通意见》第139条规定：以营利为目的，未经公民同意利用其肖像做广告、 商标、装饰橱窗等，应当认定为侵犯公民肖像权的行为。除此之外，恶意毁损、玷 污、丑化公民的肖像，或利用公民肖像进行人身攻击等，也属于侵害肖像权的行为。</p>
      <p>(4)住宅权不受侵犯。禁止非法搜查或侵入公民住宅。</p>
      <p>(5)通信自由和通信秘密。</p>
      <p>《宪法》第40条：“中华人民共和国公民的通信自由和通信秘密受法律的保护。 除因国家安全或者追查刑事犯罪的需要，由公安机关或者检察机关依照法律规定的 程序对通信进行检査外，任何组织或者个人不得以任何理由侵犯公民的通信自由和 通信秘密。”</p>
      <p>6,社会经济、文化教育方面的权利</p>
      <p>
      (1)财产权。公民的合法的私有财产不受侵犯。<br>
      (2)劳动权。既是公民的权利，也是公民的义务。<br>
      (3)休息权。劳动者有休息的权利。<br>
      (4)受教育权。既是公民的权利，也是公民的义务。<br>
      (5)获得物质帮助权。公民在年老、疾病或者丧失劳动能力的情况下，有从国 家获得物质帮助的权利。<br>
      (6)文化权利和自由。
      </p>
      `,
      id:'id6',
      matching: [{
        text: '司法平等',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '守法平等',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '选举权和被选举权',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '政治自由',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '言论、出版、集会、结社、游行、示威',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '申诉',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '控告',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '检举',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '公安机关执行',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '生命权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '肉体不受非法侵犯',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '非法限制、搜查、拘留和逮捕',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '姓名权、肖像权、名誉权、荣誉权和隐私权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '非法搜查',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '侵入公民住宅',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '国家安全',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '追查刑事犯',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '公安机关',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '检察机关',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '劳动者有休息的权利',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '年老、疾病或者丧失劳动能力',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      }],
      test: [
        {
          title: '根据我国相关法律规定，“剥夺政治权利”不包括剥夺',
          answer:['A.选举权和被选举权','B.担任国家机关职务的权利',
          'C.结婚权',
          'D.继承权'],
          correct:3,
          analysis:'C.结婚权D.继承权',
          link:''
        },
        {
          title: '《中华人民共和国宪法》规定，公民对国家工作人员的违法失职 行为有权向国家机关提岀申诉、控诉或者检举。这属于公民基本权利中的',
          answer:['A.政治权利','B.监督权利',
          'C.社会经济权利',
          'D.人身自由权利'],
          correct:1,
          analysis:'B.监督权利',
          link:''
        },
        {
          title: '大学生甲观看了电影《大唐玄奘》后，对玄奘和尚崇拜有加， 阅读了大量的佛经著作，并开始信仰佛教。甲的父母多次阻止甲参加十秒诵经会， 并将甲拘禁在房间里，烧毁了甲收藏的佛教著作。甲的父母侵犯了甲的',
          answer:['A.宗教信仰自由','B.人格权',
          'C.受教育权',
          'D.隐私权'],
          correct:0,
          analysis:'宗教信仰自由',
          link:''
        },
        {
          title: '小张和小王原本是一对非常要好的朋友，因某件事情闹翻后， 小张为发泄自己的不满，在小王的照片上乱涂乱画了一通，然后把照片贴在小王的 公司大门上，小张的行为侵犯了小王的',
          answer:['A.姓名权','B.名誉权',
          'C.肖像权',
          'D.名称权'],
          correct:2,
          analysis:'肖像权',
          link:''
        },
        {
          title: '我国宪法规定：“任何公民享有宪法和法律规定的权利，同时 必须履行宪法和法律规定的各项义务。”这体现了',
          answer:['A.权利即义务，义务亦为权利','B.公民享有权利比履行义务更重要',
          'C.在我国，公民的权利与义务是统一的',
          'D.在我国，任何公民都要行使权利和履行义务'],
          correct:2,
          analysis:'在我国，公民的权利与义务是统一的',
          link:''
        },
        {
          title: '我国公民的住宅权不受侵犯是属于',
          answer:['A.政治自由权利','B.人身自由权利',
          'C.社会经济权利',
          'D.人格尊严权利'],
          correct:1,
          analysis:'人身自由权利(4)住宅权不受侵犯。禁止非法搜查或侵入公民住宅。',
          link:''
        },
        {
          title: '下列关于我国公民基本权利和义务的表述，正确的是',
          answer:['A.国家机关无权对公民的住宅权进行限制','B.平等权意味着公民不应受到任何差别对待',
          'C.物质帮助权在我国属于公民的社会经济权利',
          'D.依法服兵役是公民的基本义务，也是公民的基本权利'],
          correct:2,
          analysis:'6,社会经济、文化教育方面的权利(5)获得物质帮助权。公民在年老、疾病或者丧失劳动能力的情况下，有从国 家获得物质帮助的权利',
          link:''
        },
        {
          title: '下列哪一项不属于宪法规定的公民的基本权利？',
          answer:['A.环境权','B.平等权',
          'C.宗教信仰自由',
          'D.受教育权'],
          correct:0,
          analysis:'六大权力没有',
          link:''
        },
        {
          title: '下列关于我国宪法规定的公民的基本权利和义务的说法，不正确的有',
          answer:['A.国家机关在适用法律时，对所有公民都应平等对待','B.公民享有向任何国家机关提出批评和建议的权利',
          'C.公民的基本权利包括劳动、受教育和依法纳税',
          'D.公民有随时改变自己的宗教信仰的自由'],
          correct:2,
          analysis:'依法纳税是义务',
          link:''
        }
      ]
    },
    {
      text:`
      <h3>6.国家机构</h3>
      <p>一级全国人民代表大会(立法机关)</p>
      <p>全国人民代表大会常务委员会--隶属于上</p>
      <br>
      <p>二级中华人民共和国主席（国家机关非个人）</p>
      <br>
      <p>三级最高人民法院(司法机关)</p>
      <p>三级下地方各级人民法院</p>
      <p>三级下专门法院</p>
      <br>
      <p>三级最高人民检察院(司法机关)</p>
      <p>三级下地方各级人民检察院</p>
      <p>三级下专门检查院</p>
      <br>
      <p>三级国家监察委员会（2018宪法修正案新增）</p>
      <p>三级下地方各级监察委</p>
      <br>
      <p>地方各级人民代表大会</p>
      <p>地方各级人大常务委员会--隶属于上</p>
      <br>
      <p>三级中央军事委员会（军委主席没有任期限制）</p>
      <br>
      <p>三级国务院（行政机关）</p>
      <p>三级下地方各级人民政府</p>
      <br>
      <h4>(一)全国人民代表大会</h4>
      <p>1.性质和地位:全国最高的权力机关、立法机关。</p>
      <p>2.组成和任期:全国人大由省、自治区、直辖市、特别行政区和军队代表组成。全国人大每届 任期为5年。</p>
      <p>2018年《宪法修正案》第62条规定，全国人民代表大会行使下列职权：</p>
      <p>
      (1)批准省、自治区和直辖市的建置。(划分由国务院批准)<br>
      (2)改变或者撤销全国人民代表大会常务委员会不适当的决定。<br>
      (3)审查和批准国民经济和社会发展计划和计划执行情况的报告。<br>
      (4)审查和批准国家的预算和预算执行情况的报告。<br>
      (5)修改宪法。全国人民代表大会常务委员会或者五分之一以上的全国人民代 表大会代表提议，
      并由全国人民代表大会以全体代表的三分之二以上的多数通过。（宪法三分之二，法律过半数）<br>
      (6)监督宪法的实施。<br>
      (7)制定和修改刑事、民事、国家机构的和其他的基本法律。<br>
      (8)选举中华人民共和国主席、副主席。<br>
      (9)选举中央军事委员会主席；根据中央军事委员会主席的提名，决定中央军 事委员会其他组成人员的人选。<br>
      (10)选举国家监察委员会主任。<br>
      (11)选举最高人民法院院长。<br>
      (12)选举最高人民检察院检察长。<br>
      (13)根据中华人民共和国主席的提名，决定国务院总理的人选；根据国务院 总理的提名，决定国务院副总理、国务委员、各部部长、各委员会主任、审计长、 秘书长的人选。<br>
      (14)选举中央军事委员会主席；根据中央军事委员会主席的提名，决定中央 军事委员会其他组成人员的人选。<br>
      (15)决定特别行政区的设立及其制度。<br>
      (16)决定战争和和平的问题。<br>
      </p>
      <p>口诀：一批一改二审三法五选五决定</p>
      <p>口诀：宪法三分之二，法律过半数</p>
      <p>口诀：国务院组成人员：副务员部审总秘(谐音记忆：服务员不审总秘)</p>
      <h4>(二)国务院的职权(2018《宪法修正案》)</h4>
      <p>
      2018年《宪法修正案》第89条规定，国务院行使下列职权：<br>
      (一)根据宪法和法律，规定行政措施，制定行政法规，发布决定和命令；<br>
      (二)向全国人民代表大会或者全国人民代表大会常务委员会提出议案；<br>
      (三)规定各部和各委员会的任务和职责，统一领导各部和各委员会的工作，并且领导不属于各部和各委员会的全国性的行政工作；<br>
      (四）统一领导全国地方各级国家行政机关的工作，规定中央和省、自治区、 直辖市的国家行政机关的职权的具体划分；<br>
      (六）领导和管理经济工作和城乡建设、生态文明建设；(生态文明建设2018新增)<br>
      (八)领导和管理民政、公安、司法行政等工作（2018删监察）；<br>
      (九）管理对外事务，同外国缔结条约和协定；（外交权）<br>
      (十二）保护华侨的正当的权利和利益，保护归侨和侨眷的合法的权利和利益；<br>
      (十三）改变或者撤销各部、各委员会发布的不适当的命令、指示和规章；（只要是领导和被领导关系，都可以改变和撤销）<br>
      (十四）改变或者撤销地方各级国家行政机关的不适当的决定和命令；（只要是领导和被领导关系，都可以改变和撤销）<br>
      (十五）批准省、自治区、直辖市的区域划分，批准自治州、县、自治县、市 的建置和区域划分；
      （对比记忆：《宪法》第107条第3款，省、直辖市的人民政府 决定乡、民族乡、镇的建置和区域划分）<br> 
      (十六）依照法律规定决定省、自治区、直辖市的范围内部分地区进入紧急状态。
      </p>
      <p>省市县乡建制口诀：乡我省，村找县，县级以上国务院，全国人大批省建</p>
      <br>
      <p>（三）全国人大常委会的职权（2018《宪法修正案》）</p>
      <p>口诀：两个解释/监督/撤销/规定/闭会期间五个提名六个决定</p>
      <p>口诀：如果上下级是监督关系，上级只能撤销不能改变下级立法（对于地方常委只能撤不能改，因为是监督关系）</p>
      <br>
      <p>2018《宪法修正案》第67条规定全国人民代表大会常务委员会行使下列职权：</p>
      <p>（一）解释宪法，监督宪法的实施；</p>
      <p>（二）制定和修改除应当由全国人民代表大会制定的法律以外的其他法律；</p>
      <p>（三）在全国人民代表大会闭会期间，对全国人民代表大会制定的法律进行部 分补充和修改，但是不得同该法律的基本原则相抵触；</p>
      <p>（四）解释法律；</p>
      <p>（五）在全国人民代表大会闭会期间，审查和批准国民经济和社会发展计划、 国家预算在执行过程中所必须作的部分调整方案；</p>
      <p>（六）监督国务院、中央军事委员会、国家监察委员会、最高人民法院和最高 人民检察院的工作；（2018监察委新增）</p>
      <p>（七）撤销国务院制定的同宪法、法律相抵触的行政法规、决定和命令；（人大常委会和国务院为监督和被监督关系）</p>
      <p>（八）撤销省、自治区、直辖市国家权力机关制定的同宪法、法律和行政法规 相抵触的地方性法规和决议；（地方权力机关也为人大，与全国人大监督被监督）</p>
      <p>（九）在全国人民代表大会闭会期间，根据国务院总理的提名，决定部长、委 员会主任、审计长、秘书长的人选；</p>
      <p>（十）在全国人民代表大会闭会期间，根据中央军事委员会主席的提名，决定 中央军事委员会其他组成人员的人选；</p>
      <p>（十一）根据国家监察委员会主任的提请，任免国家监察委员会副主任、委员；</p>
      <p>（十二）根据最高人民法院院长的提请，任免最高人民法院副院长、审判员、 审判委员会委员和军事法院院长；</p>
      <p>（十三）根据最高人民检察院检察长的提请，任免最高人民检察院副检察长、 检察员、检察委员会委员和军事检察院检察长，并且批准省、自治区、直辖市的人 民检察院检察长的任免；</p>
      <p>（十四）决定驻外全权代表的任免;</p>
      <p>（十五）决定同外国缔结的条约和重要协定的批准和废除；（可以行使国家元首职权）</p>
      <p>（十六）规定军人和外交人员的衔级制度和其他专门衔级制度；</p>
      <p>（十七）规定和决定授予国家的勋章和荣誉称号；</p>
      <p>（十八）决定特赦；</p>
      <p>（十九）在全国人民代表大会闭会期间，如果遇到国家遭受武装侵犯或者必须 履行国际间共同防止侵略的条约的情况，决定战争状态的宣布；</p>
      <p>（二十）决定全国总动员或者局部动员；</p>
      <p>（二十一）决定全国或者个别省、自治区、直辖市进入紧急状态；</p>
      <p>（二十二）全国人民代表大会授予的其他职权。</p>
      <br>
      <p>2018《宪法修正案》第63条规定，全国人民代表大会有权罢免下列人员：</p>
      <p>
      （1）中华人民共和国主席、副主席；
      （2）国务院总理、副总理、国务委员、各部部长、各委员会主任、审计长、秘 书长；
      （3）中央军事委员会主席和中央军事委员会其他组成人员；
      （4）国家监察委员会主任；
      （5）最高人民法院院长；
      （6）最咼人民检察院检察长。
      </p>

      `,
      id:'id7',
      matching: [{
        text: '决定战争状态的宣布',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '紧急状态',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '监督',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '解释宪法',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '解释法律',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '改变或者撤销',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '区域划分',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '对外事务',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '缔结条约和协定',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '民政、公安、司法行政',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '经济工作',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '城乡建设',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '国家行政机关的工作',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '生态文明建设',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '任务和职责',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '统一领导各部和各委员会',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '制定行政法规',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '提出议案',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '国务院总理的人选',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '国务院副总理',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '人民检察院检察长',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '国主席的提名',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '监察委员会主任',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '人民法院院长',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '中央军事委员会主席',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '中央军事委员会主席的提名',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '全体代表的三分之二',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '国主席、副主席',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '最高的权力机关、立法机关',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '任期为5年',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '一批一改二审三法五选五决定',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '省、自治区和直辖市的建置',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '改变或者撤销',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '修改宪法',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '监督宪法的实施',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '其他的基本法律',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '常务委员会',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '五分之一',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      }],
      test: [
        {
          title: '下列不属于国家机构组成部分的是',
          answer:['A.全国人大常委会','B.国家主席',
          'C.全国政协',
          'D.国务院'],
          correct:2,
          analysis:'全国政协属于爱国统一战线的组织形式',
          link:''
        },
        {
          title: '中华人民共和国的最高权力机关是',
          answer:['A.国务院','B.全国人民代表大会',
          'C.全国人民政治协商会议',
          'D.中央人民政府'],
          correct:1,
          analysis:'全国人民代表大会全国最高的权力机关、立法机关。',
          link:''
        },
        {
          title: '国人民代表大会是我国的最高权力机关，依法行使国家的',
          answer:['A.立法权','B.行政权',
          'C.司法权',
          'D.执行权'],
          correct:0,
          analysis:'全国人民代表大会全国最高的权力机关、立法机关。',
          link:''
        },
        {
          title: '根据宪法和法律的规定，下列职位中由全国人民代表大会选 举产生的是',
          answer:['A.国务院总理','B.国家副主席',
          'C.军委副主席',
          'D.最高人民法院副院长'],
          correct:1,
          analysis:'(8)选举中华人民共和国主席、副主席。',
          link:''
        },
        {
          title: '根据我国宪法的规定，下列有关国务院的表述不正确的是',
          answer:['A.国务院实行集体负责制','B.国务院是最高国家行政机关',
          'C.国务院是我国的中央人民政府',
          'D.国务院是最高国家权力机关的执行机关'],
          correct:0,
          analysis:'为总理负责制',
          link:''
        },
        {
          title: '国务院可以制定',
          answer:['A.基本法律','B.行政规章',
          'C.行政法规',
          'D.自治条例'],
          correct:0,
          analysis:'C.行政法规',
          link:''
        },
        {
          title: '国务院提出的议案应由（	）签署',
          answer:['A.国务院','B.全国人民代表大会',
          'C.国家主席',
          'D.国务院总理'],
          correct:3,
          analysis:'最高领导签',
          link:''
        },
        {
          title: '根据《宪法》规定，国家立法权的行使主体是',
          answer:['A.全国人民代表大会','B.全国人民代表大会常务委员会',
          'C.国家主席',
          'D.国务院'],
          correct:0,
          analysis:'A.全国人民代表大会B.全国人民代表大会常务委员会（开会闭会）',
          link:''
        }
      ]
    },
    {
      text:`
      <h4>（四）人大代表</h4>
      <p>1.集体行使权利</p>
      <p>（1）提出议案（人大代表在人大会召开之前递交议案，一个代表团或者30名以上代表联名，可以向全国人大提出属于全国人大职权范围内的议案）；<br>
      （2）提出质询和询问（在全国人大会议期间，一个代表团或者30名以上代表 联名，可以书面提出对国务院及其部委的质询案，由主席团决定交受质询机关书面 答复，或者由受质询机关的领导人在主席团会议上或者有关的专门委员会会议上或 者有关的代表团会议上口头答复）。
      </p>
      <p>2.人大代表个人权利</p>
      <p>（1）工作便利权和物质权；<br>
      （2）言论免责权；（全国人大代表在全国人大各种会议上的发言和表决不受法 律追究）<br>
      （3）人身特别保护权（人大代表具有刑事豁免权，即非经特别许可不受限制人 身自由、逮捕或审判的权利。但乡级人大代表没有刑事豁免权）。<br>
      </p>
      <p>《代表法》规定，县级以上的各级人大代表，非经本级人大主席团许可，在本 级人大闭会期间，非经本级人大常委会许可，不受逮捕或者刑事审判。如果因为是 现行犯被拘留，执行拘留的机关应当立即向该级人民代表大会主席团或者人民代表 大会常务委员会报告。</p>
      <p>乡、民族乡、镇的人民代表大会代表，如果被逮捕、受刑事审判或者被采取法 律规定的其他限制人身自由的措施，执行机关应当立即报告乡、民族乡、镇的人民 代表大会。（乡级人大代表没有刑事豁免权）</p>
      <p>《选举法》第51条：地方各级人民代表大会代表在任期内调离或者迁出本行政 区域的，其代表资格自行终止，缺额另行补选。</p>
      <p>十七大：城乡按相同人口比例选举人大代表，我国实现更广泛民主的途径是提 高基层人大代表比例。</p>
      <h4>（五）中华人民共和国主席（2018《宪法修正案》）</h4>
      <p>口诀：公布权、任免权、外事权、授予荣誉权</p>
      <p>1.性质</p>
      <p>国家元首，包括国家主席和副主席。</p>
      <p>第79条规定，中华人民共和国主席、副主席由全国人民代表大会选举。有选举 权和被选举权的年满四十五周岁的中华人民共和国公民可以被选为中华人民共和国 主席、副主席。</p>
      <p>中华人民共和国主席、副主席每届任期同全国人民代表大会每届任期相同。（5年）</p>
      <p>国家主席行使职权须以全国人大或全国人大常委会的决定为依据，主要釆取主席令的形式。</p>
      <p>中华人民共和国主席缺位的时候，由副主席继任主席的职位。中华人民共和国 副主席缺位的时候，由全国人民代表大会补选。在补选以前，由全国人民代表大会 常务委员会委员长暂时代理主席职位。</p>
      <p>2.国家主席职权</p>
      <p>公布权345、任免权6、外事权12、授予荣誉权7</p>
      <p>
      (1)代表国家，进行国事活动。<br>
      (2)代表国家，接受外国使节。<br>
      (3)根据全国人大常委会的决定，宣布批准或废除条约和重要协定。<br>
      (4)公布法律，发布命令。<br>
      (5)发布特赦令、宣布进入紧急状态、动员令、宣布战争状态等。<br>
      (6)国务院总理、副总理、国务委员……，经全国人大或全国人大常委会正式 确定人选后，由国家主席宣布其任职或免职。国家主席根据全国人大常委会的决定, 派出或召回驻外大使。<br>
      (7)根据全国人大常委会的决定，代表国家向那些对国家有重大功勋的人授予 荣誉奖章和光荣称号。
      </p>
      <h4>（六）监察委员会（2018《宪法修正案》）</h4>
      <p>
      第123条 中华人民共和国各级监察委员会是国家的监察机关。<br>
      第124条中华人民共和国设立国家监察委员会和地方各级监察委员会。<br>
      监察委员会由下列人员组成：主任，副主任若干人，委员若干人。<br>
      监察委员会主任每届任期同本级人民代表大会每届任期相同。国家监察委员会 主任连续任职不得超过两届。监察委员会的组织和职权由法律规定。<br>
      第125条 中华人民共和国国家监察委员会是最高监察机关。国家监察委员会 领导地方各级监察委员会的工作，上级监察委员会领导下级监察委员会的工作。<br>
      第126条 国家监察委员会对全国人民代表大会和全国人民代表大会常务委员 会负责。地方各级监察委员会对产生它的国家权力机关和上一级监察委员会负责。<br>
      第127条监察委员会依照法律规定独立行使监察权，不受行政机关、社会团 体和个人的干涉。监察机关办理职务违法和职务犯罪案件，应当与审判机关、检察 机关、执法部门互相配合，互相制约。
      </p>
      <p>【任期总结】</p>
      <p>全国人大委员长、副委员长连续任职不得超过两届。</p>
      <p>国务院总理、副总理、国务委员连续任职不得超过两届。</p>
      <p>最高人民法院院长每届任期同全国人民代表大会每届任期相同，连续任职不得超过两届。</p>
      <p>最高人民检察院检察长每届任期同全国人民代表大会每届任期相同，连续任职不得超过两届。</p>
      <p>监察委员会主任每届任期同本级人民代表大会每届任期相同。国家监察委员会主任连续任职不得超过两届（地方不受限制）</p>
      <h4>（七）法院和检察院</h4>
      <p>法院性质：审判机关。(为4级：最高、省高、市中、基层。两审终审。司法独立。)</p>
      <p>领导体制：上级人民法院监督下级法院的审判工作</p>
      <p>检察院性质：法律监督机关。</p>
      <p>双重领导体制：下级接受上级领导+向本级人大及其常委会负责</p>
      `,
      id:'id8',
      matching: [{
        text: '一个代表团或者30名以上代表',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '刑事豁免权',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '立即报告乡',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '任期内调离或者迁出',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '代表资格自行终止',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '公布权、任免权、外事权、授予荣誉权',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '年满四十五周岁',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '主席令',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '公布权345、任免权6、外事权12、授予荣誉权7',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '国家的监察机关',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '连续任职不得超过两届',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '领导地方各级监察委员会',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '国家权力机关',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '上一级监察委员会负责',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '不受行政机关',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '职务违法',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '职务犯罪',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '不得超过两届',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      },{
        text: '法院监督下',
        style: 'display:inline-block;background:#CC0066;color:#ffffff;'
      }],
      test: [
        {
          title: '国家主席具有(	)性质和权力',
          answer:['A.每一届任期8年','B.可以修改法律',
          'C.可以发布特赦令',
          'D.可以解释宪法'],
          correct:2,
          analysis:'C.结婚权D.继承权',
          link:''
        },
        {
          title: '下列关于我国国家主席的说法，正确的有',
          answer:['A.有选举权和被选举权的年满四十五周岁的中华人民共和国公民可以被选举为 中华人民共和国主席',
          'B.国家主席是我国国家机构的重要组成部分，是一个相对独立的国家机关',
          'C.中华人民共和国主席连续任职不得超过两届',
          'D.中华人民共和国主席每届任期同全国人民代表大会每届任期不同'],
          correct:0,
          analysis:'A.有选举权和被选举权的年满四十五周岁的中华人民共和国公民可以被选举为 中华人民共和国主席B.国家主席是我国国家机构的重要组成部分，是一个相对独立的国家机关',
          link:''
        },
        {
          title: '人民法院是我国的审判机关，上级人民法院（	）下级人民法院的审判工作。',
          answer:['A.领导','B.指导',
          'C.监督',
          'D.配合'],
          correct:2,
          analysis:'领导体制：上级人民法院监督下级法院的审判工作',
          link:''
        }
      ]
    },
  ]
};

export default constitution1;