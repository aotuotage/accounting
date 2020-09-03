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
        label: '前四次《宪法修正案》'
      },{
        label: '2018年第五次《宪法修正案》'
      }]
    },{
      label: '国家制度',
      children: [{
        label: '国体'
      },{
        label: '政党制度和政协制度'
      },{
        label: '政体'
      },{
        label: '选举制度的基本原则'
      },{
        label: '民族区域自治制度'
      },{
        label: '特别行政区制度'
      },{
        label: '基本经济制度'
      },{
        label: '基本群众自治制度'
      }]
    },{
      label: '公民的基本权利'
    },{
      label: '国家机构',
      children: [{
        label: '全国人民代表大会'
      },{
        label: '国务院'
      },{
        label: '全国人大常委会'
      },{
        label: '人大代表'
      },{
        label: '监察委员会'
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
      <h3>（二）2018年第五次《宪法修正案》</h3>
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
      <br>⑰增人大常委会任免国家监察委副主任/委 员职能
      <br>⑱增人大常委不得担任监察机关职务
      ⑲“法制”变“法治”</p>
      `,
      id:'id1',
      matching: [{
        text: '私营土地可转让',
        style: 'display:inline-block;background:#CC0000;color:#ffffff;'
      },{
        text: '《中国人民政治协商会议共 同纲领》',
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
        text: '多党合作，政治协商',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '法治 国家',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '多党合作，政治协商',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '多党合作，政治协商',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '多党合作，政治协商',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '多党合作，政治协商',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '多党合作，政治协商',
        style: 'display:inline-block;background:#FFCC00;color:#ffffff;'
      },{
        text: '多党合作，政治协商',
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
      id:'id3',
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
      <p></p>
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
          title: '我国特别行政区制度的基本内容有',
          answer:['A.特区政府主要官员由中央政府任命','B.自行发行货币',
          'C.全国人大授权实行高度自治',
          'D.实行独立的税收制度'],
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
  ]
};

export default constitution1;