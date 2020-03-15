<template>
  <div class="login">
    <div class="top">
      <img @click="toHome" src="img/layout/logoBlue.png" alt />
    </div>
    <div class="content">
      <img src="img/login/ren.png" alt />
      <div class="contentRight">
        <img
          v-if="!loginType && currentIsLogin"
          src="img/login/账号登录.png"
          @click="loginType = true"
          alt
        />
        <img
          v-if="loginType && currentIsLogin"
          src="img/login/二维码.png"
          @click="loginType = false"
          alt
        />
        <div v-if="loginType && currentIsLogin" class="QRCodeTip">扫码登录</div>
        <div v-if="!loginType && currentIsLogin" class="QRCodeTip">账号登录</div>
        <p v-if="loginType && currentIsLogin">账号登录</p>
        <p
          v-if="!loginType && currentIsLogin"
          style="text-align: center;padding-left: 250px;box-sizing: border-box;"
        >扫码登录</p>
        <p
          style="margin-top: 10px;text-align: center;padding-left: 250px;box-sizing: border-box;"
          v-if="!currentIsLogin"
        >账号注册</p>
        <div class="box">
          <div class="Rightleft">
            <div v-show="!currentIsLogin" style="width: 100%;height: 40px;"></div>
            <img src="img/login/erweima.jpg" alt />
            <div class="qrcodeInfo">
              <p>扫码授权，完善信息</p>
              <p>即可获取账号和密码</p>
              <!-- <p>或点击右上角扫码登陆</p> -->
            </div>
          </div>
          <div class="RightRight">
            <div v-show="!loginType && currentIsLogin" id="qr"></div>
            <div v-show="loginType && currentIsLogin" class="rightRinp">
              <img src="img/login/用户.png" alt />
              <input v-model="username" placeholder="请输入手机号" type="text" />
            </div>
            <div v-show="loginType && currentIsLogin" class="rightRinp">
              <img src="img/login/密码.png" alt />
              <input v-model="userpsw" placeholder="请输入身份证后6位" type="password" />
            </div>
            <div v-show="loginType && currentIsLogin" class="checkBox">
              <el-checkbox v-model="rememberPsw">记住密码</el-checkbox>
            </div>
            <div v-show="loginType && currentIsLogin" @click="login" class="loginBtn">登 录</div>
            <p class="registTip" v-show="loginType && currentIsLogin">
              还没有账号?
              <span @click="toRegist">立即注册 >></span>
            </p>
            <!-- ----------------------- -->
            <div v-show="loginType && !currentIsLogin" class="rightRinp">
              <img src="img/login/用户.png" alt />
              <input v-model="userNumRegist" placeholder="请输入手机号" type="text" />
            </div>
            <div v-show="loginType && !currentIsLogin" class="rightRinp">
              <img src="img/login/密码.png" alt />
              <input v-model="userPswRegist" placeholder="请输入密码" type="text" />
            </div>
            <div v-show="loginType && !currentIsLogin" class="rightRinp">
              <img src="img/login/用户.png" alt />
              <input v-model="userNameRegist" placeholder="请输入用户名" type="text" />
            </div>
            <div v-show="loginType && !currentIsLogin" @click="regist" class="loginBtn">立即注册</div>
            <div v-show="loginType && !currentIsLogin" class="registIsOk">
              点击“立即注册”，表示您同意并愿意遵守
              <span @click="agreeToView">《法虎服务协议》</span>
            </div>
            <p class="registTip" v-show="loginType && !currentIsLogin">
              已有账号?
              <span @click="toLogin">去登陆 >></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="layoutFooterBot">
      <p>
        <img src="img/layout/ghs.png" alt="国徽" />京公网安备 11010502035663号 备案网
        <a
          style="padding-left:5px;"
          target="_blank"
          href="http://www.beian.miit.gov.cn"
        >http://www.beian.miit.gov.cn</a>
      </p>
      <p>北京律狮科技有限公司，备案号 京ICP备18043352号</p>
      <p>技术支持：北京律狮科技有限公司</p>
    </div>
    <el-dialog v-show="agreeFlag" title="《法虎服务协议》" :visible.sync="agreeFlag" width="50%">
      <span v-html="agreeConter"></span>
    </el-dialog>
  </div>
</template>
<script>
// import WxLogin from "../../../public/js/wxLogin.js";
import { homelogin, homeRegist } from "@/api/api";
import { Message } from "element-ui";
export default {
  data() {
    return {
      // ErObj: {}
      loginType: true,
      rememberPsw: false,
      username: "",
      userpsw: "",
      currentIsLogin: true,
      userNumRegist: "",
      userPswRegist: "",
      userNameRegist: "",
      agreeFlag: false,
      agreeConter: `
      <div class="article-content">
<p class="MsoNormal" style="text-indent:24.0000pt;">
	<span>感谢您选择法虎法律平台，该平台致力于为您提供最便捷、高效的法律服务。为更好的保障您的权益，在注册法虎平台账号及使用本服务前，请用户（以下亦称</span>“您”，未成年人应当在监护人陪同下阅读）审慎阅读、充分理解以下所述条款的内容，特别是限制、排除或者免除责任的条款。
</p>
<p class="MsoNormal">
	&nbsp;&nbsp;&nbsp;&nbsp;<span>以下所述条款即构成您与北京律狮科技有限公司（以下简称</span>“律狮科技”）之间关于您使用法虎平台所达成的协议（以下简称“本协议”），是您与律狮科技关于法虎平台相关事项订立的最终、完整且排他的协议。除非您已阅读并接受本协议的全部条款，否则您无权使用法虎平台。一旦您选择注册了法虎平台账号，即视为您已接受本协议的全部条款，并受本协议的约束。 &nbsp;&nbsp;&nbsp;
</p>
<p class="MsoNormal">
	1. <span>定义</span>
</p>
<p class="MsoNormal">
	1.1<span>法虎平台服务，是指律狮科技公司经营的一款网络服务产品。其作为独立第三方法律服务平台，通过互联网信息技术的运用，为您提供包括但不限于法律咨询、律师服务购买、法律服务费保管等服务，具体详情以相关服务介绍页面内容为准。</span>
</p>
<p class="MsoNormal">
	1.2<span>法虎平台规则：包括在所有法虎平台规则频道内已经发布及后续发布的全部规则、解读、公告等内容以及各平台在资讯、论坛、需求中心内发布的各类规则、实施细则、产品流程说明、公告等。</span>
</p>
<p class="MsoNormal">
	2. <span>协议的接受</span>
</p>
<p class="MsoNormal">
	2.1<span>当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，或您以其他法虎允许的方式实际使用法虎服务时，即表示您已充分阅读、理解并接受本协议的全部内容，并与法虎平台达成协议。您可以使用您提供或确认的邮箱、手机号码或者法虎允许的其它方式作为登录手段进入法虎网站。 </span>
</p>
<p class="MsoNormal">
	如果您不同意本协议的相关条款，请您立即停止使用本网站及其服务。
</p>
<p class="MsoNormal">
	2.2<span>法虎平台有权随时根据有关法律、法规的变化，以及公司经营状况和经营策略的调整等变更、修改、增加或删除本协议。所有修改的协议均构成本服务协议的一部分。服务条款一旦发生变动，法虎将公示修改的内容；当您使用法虎的任何服务时，应接受法虎随时提供的与该服务相关的规则或说明，并且此规则或说明均构成本服务条款的一部分。您如果不同意服务条款的修改，可以主动取消已经获得的服务；如果您继续享用服务，则视为您已经接受服务条款的修改。</span>
</p>
<p class="MsoNormal">
	2.3<span>当发生争议时，以最新公布的协议版本为准。</span>
</p>
<p class="MsoNormal">
	3. <span>用户注册</span>
</p>
<p class="MsoNormal">
	3.1<span>在注册时，您应当依照法律法规要求，按相应页面的提示准确提供您的完整、准确、真实的注册信息资料，并于资料信息变更时及时更新，以保证您所提交资料的真实、及时、完整和准确。如有合理理由怀疑您提供的资料错误、不实、过时或不完整的，法虎有权向您发出询问及</span><span>/</span><span>或要求改正的通知，并有权直接做出删除相应资料的处理，直至中止、终止对您提供部分或全部法虎平台服务。法虎对此不承担任何责任，您将承担因此产生的任何直接或间接损失及不利后果。</span>
</p>
<p class="MsoNormal">
	3.2<span>法虎特别提醒您妥善保管您的用户名和密码，不要将您的账号信息透露给任何其他人，当使用完法虎服务后，应安全退出。因您保管不善而导致密码失窃或其他未授权使用的，由此而造成的损失由您自行承担。</span>
</p>
<p class="MsoNormal">
	3.3<span>如您忘记密码或因其他原因而无法登陆的，您可以自行通过注册时的邮箱、手机号码找回或重置密码，也可以向法虎的客服人员提供注册时的个人资料信息来找回或重置密码。</span>
</p>
<p class="MsoNormal">
	3.4<span>法虎仅根据服务器接收到的用户名、密码进行身份确认，在用户名、密码准确的情况下，法虎将视为该登陆行为系您亲自实施。如您发现任何账号异常情况，应立即通知法虎，但该账号登陆后可能导致的损失由您承担，法虎不负任何责任。</span>
</p>
<p class="MsoNormal">
	3.5<span>法虎帐号的所有权归律狮科技所有，您完成注册手续后，仅获得法虎帐号的使用权，且该使用权仅属于初始注册人。初始注册人不得通过赠与、借用初始注册人不得通过赠与、借用、转让或售卖法虎帐号或者以其他方式许可非初始注册人使用法虎帐号。</span>
</p>
<p class="MsoNormal">
	4.<span>用户使用限制</span>
</p>
<p class="MsoNormal">
	4.1<span>您应遵守中华人民共和国相关法律法规及您所属、所居住或开展经营活动或其他业务的国家或地区的法律法规，不得将法虎平台服务用于任何非法目的（包括用于禁止或限制交易物品的交易），也不得以任何非法方式使用法虎服务。</span>
</p>
<p class="MsoNormal">
	4.2<span>不得利用本网站上传违反法律、行政法规、互联网管理方面的部门规章之内容，包括但不限于：宣传暴力、色情、破坏民族团结、侮辱、诽谤他人之内容。 </span>
</p>
<p class="MsoNormal">
	4.3<span>不得在本网站内容或您上传的资料中安装插件或软件，以上传、链接、跳转、推广非本网站授权的资料。 </span>
</p>
<p class="MsoNormal">
	4.4 <span>不得对法虎平台上的任何数据作商业性利用，包括但不限于在未经律狮科技事先书面同意的情况下，以复制、传播等任何方式使用法虎平台站上展示的资料。 </span>
</p>
<p class="MsoNormal">
	4.5<span>不得利用本网站或对本网站进行传播病毒、进行黑客攻击、入侵计算机系统、窃取他人的帐号及密码、侵犯他人商业秘密及其他知识产权之行为。不使用任何装置、软件或例行程序干预或试图干预法虎平台的正常运作或活动。您不得采取任何将导致不合理的庞大数据负载加诸法虎平台网络设备的行动。 </span>
</p>
<p class="MsoNormal">
	4.6<span>您不得实施侵犯本网站内容及计算机软件所涉及的知识产权之行为；</span>
</p>
<p class="MsoNormal">
	4.7<span>如果您有上述违反国家法律、行政法规的行为，本网站有权在不通知您的情况下删除非法信息，并有权对您的帐号进行关闭或注销，不再提供法律服务，且不退还您已经支付的所有费用；由此造成的一切损失，由您自行负责，本网站不承担任何法律责任。如果因此给法虎平台及相关方造成损失的，您还应承担赔偿责任。。 &nbsp;</span>
</p>
<p class="MsoNormal">
	5. <span>法虎平台服务及规范</span>
</p>
<p class="MsoNormal">
	5.1<span>您应自行诚信向本站提供注册资料，并同意其提供的注册资料真实、准确、完整、合法有效，如注册资料有变动的，应及时更新其注册资料。如果您提供的注册资料不合法、不真实、不准确、不详尽的，您需承担因此引起的相应责任及后果，并且本网站保留终止会员使用本网站各项服务的权利。</span>
</p>
<p class="MsoNormal">
	5.2<span>您必须自行准备如下设备和承担如下开支：</span>
</p>
<p class="MsoNormal">
	(1) <span>上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；</span>
</p>
<p class="MsoNormal">
	(2) <span>上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。</span>
</p>
<p class="MsoNormal">
	4.3<span>您可在本网站上查询商品、服务信息、发表使用体验、参与商品、服务讨论、参加本网站的有关活动，以及使用本网站上提供的其他服务。</span>
</p>
<p class="MsoNormal">
	4.4<span>您应当遵守诚实信用原则，确保您所发布的商品及</span><span>/</span><span>或服务信息真实、与您实际所销售的商品及</span><span>/</span><span>或提供的服务相符，并在交易过程中切实履行您的交易承诺。</span>
</p>
<p class="MsoNormal">
	4.5<span>您在本站进行浏览、下单购物等活动时，涉及您真实姓名</span><span>/</span><span>名称、通信地址、联系电话、电子邮箱等隐私信息的，本站将予以严格保密，除非得到您的授权或法律另有规定，本站不会向外界披露会员隐私信息。</span>
</p>
<p class="MsoNormal">
	5. <span>服务的提供、变更、中断与终止</span>
</p>
<p class="MsoNormal">
	5.1<span>法虎平台按照现有技术和条件所能达到的现状向用户、会员提供相关的服务，并尽最大努力确保服务的安全性和稳定性。同时，法虎平台始终在不断变更和改进服务，包括可能会增加或删除法虎平台的部分服务，也可能暂停或彻底终止本项服务。</span>
</p>
<p class="MsoNormal">
	5.2<span>发生下列任何情况之一的，法虎平台有权在不经事先通知的情况下中断或终止本服务，而无需承担任何责任：</span>
</p>
<p class="MsoNormal">
	(1) <span>本服务受到计算机病毒、木马或其他恶意程序、黑客而遭受破坏的；</span>
</p>
<p class="MsoNormal">
	(2) <span>您本地或本服务的计算机软硬件、通信线路等出现故障的；</span>
</p>
<p class="MsoNormal">
	(3) <span>您违反相关法律法规或本协议的约定；</span>
</p>
<p class="MsoNormal">
	(4) <span>根据相关规定您应提交真实信息，而未提供的或未能提供合理证明的；</span>
</p>
<p class="MsoNormal">
	(5) <span>其他法虎平台单方判断认为应当中止或终止本服务的情形。</span>
</p>
<p class="MsoNormal">
	5.3<span>如果您停止使用本服务或服务被终止或取消， 法虎平台可以从服务器上永久地删除您的数据。服务停止、终止或取消后，法虎平台没有义务向您返还任何数据。</span>
</p>
<p class="MsoNormal">
	5.4<span>您同意法虎平台有权行使上述权利且不需对用户或第三方承担任何责任。</span>
</p>
<p class="MsoNormal">
	6. <span>知识产权</span>
</p>
<p class="MsoNormal">
	6.1<span>法虎平台知识产权</span>
</p>
<p class="MsoNormal">
	<span>法虎平台由律狮科技独立自主开发完成。法虎平台（网页、客户端、移动端产品）的著作权、商标权、专利权、商业秘密等知识产权、其他相关权利均独立归属律狮科技所有。法虎以及与其相关的所有信息内容，包括但不限于：法虎商标标识、网页</span>/<span>产品版面设计、界面设计、图标、色彩、文字表述、数据、代码、电子文档及其组合等均受中华人民共和国著作权法、商标法、专利法、反不正当竞争法和相应的国际条约以及其他知识产权法律法规的保护。未经法虎平台及其他相关权利人同意，用户不得以任何方式或任何途径实施发布、复制、出版等行为，不论是否以商业为目的。</span>
</p>
<p class="MsoNormal">
	6.2<span>您同意并已充分了解本协议的条款，承诺不将已发表于本站的信息，以任何形式发布或授权其它主体以任何方式使用（包括但限于在各类网站、媒体上使用）。</span>
</p>
<p class="MsoNormal">
	6.3<span>除法律另有强制性规定外，未经本网站明确的特别书面许可</span><span>,</span><span>任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用本站的信息内容，否则，本网站有权追究其法律责任。</span>
</p>
<p class="MsoNormal">
	6.4<span>本站所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、数字下载、数据编辑和软件），均是本网站或其内容提供者的财产，受中国和国际版权法的保护。本站上所有内容的汇编是本网站的排他财产，受中国和国际版权法的保护。本站上所有软件都是本网站或其关联公司或其软件供应商的财产，受中国和国际版权法的保护。</span>
</p>
<p class="MsoNormal">
	7. <span>用户信息保护</span>
</p>
<p class="MsoNormal">
	7.1<span>您在注册帐号时和使用本网站服务时本网站将采集包括注册信息、案件信息、非个人化信息等用户信息。 </span>
</p>
<p class="MsoNormal">
	7.2<span>本网站仅在符合下列条件之一的情况下，对收集到的您的用户信息进行限制使用。 </span>
</p>
<p class="MsoNormal">
	(1)<span>在取得您的书面授权的情况下。 </span>
</p>
<p class="MsoNormal">
	(2)<span>当您的人身权和财产权面临重大损害时； </span>
</p>
<p class="MsoNormal">
	(3)<span>当第三人的权益面临重大损害时； </span>
</p>
<p class="MsoNormal">
	(4)<span>依照政府监管机关命令或司法机关要求时。 </span>
</p>
<p class="MsoNormal">
	7.3<span>在不透露您的隐私资料前提下，本网站有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</span>
</p>
<p class="MsoNormal">
	8. <span>责任限制与不可抗力</span>
</p>
<p class="MsoNormal">
	8.1<span>法虎平台会尽最大努力完善和提升服务，并按“现有”的状态向您提供本服务，法虎平台不提供任何类型的担保，不论是明确的或隐含的。例如：法虎平台不担保本服务一定能满足您的要求，服务不会中断，服务的及时性、安全性、真实性，服务不会发生出错等，但法虎平台将尽力减少因此给您造成的损失和影响。</span>
</p>
<p class="MsoNormal">
	8.2<span>法虎平台对您经由法虎平台提供的服务所获得的信息亦不做任何担保，或承担任何由此等信息引发的损害。尤其是您通过汇桔网法虎平台提供的服务获得的商业广告信息、交易信息等。 如果您通过获得的上述“信息”而进行任何行为，请您务必自行甄别信息的真实性和谨慎预防可能存在的风险，法虎平台将不会对您的个人行为承担任何直接、间接、 附带或衍生的损失和责任。</span>
</p>
<p class="MsoNormal">
	8.3<span>法虎平台对本项服务下涉及的境内外基础电信运营商的移动通信网络的故障、技术缺陷、覆盖范围限制、不可抗力、计算机病毒、黑客攻击等不可抗力因素导致的损失不承担责任。</span>
</p>
<p class="MsoNormal">
	9. <span>通知</span>
</p>
<p class="MsoNormal">
	<span>所有发给您的通知都可通过电子邮件、常规的信件或在法虎平台内显著位置公告的方式进行传送。法虎平台将通过上述方法之一将消息传递给您，告知您服务条款的修改、</span> <span>服务变更等。</span>
</p>
<p class="MsoNormal">
	10. <span>法律责任</span>
</p>
<p class="MsoNormal">
	10.1<span>如果发现或收到他人举报或投诉您违反本协议约定的，法虎平台有权不经通知随时对相关内容进行删除或屏蔽，并视行为情节对违规帐号处以包括但不限于警告、限制或禁止使用全部或部分功能、 账号封禁直至注销的处罚，并公告处理结果。</span>
</p>
<p class="MsoNormal">
	10.2<span>您理解并同意，法虎平台有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等， 用您独自承担由此而产生的一切法律责任。</span>
</p>
<p class="MsoNormal">
	10.3<span>您理解并同意，因您违反本协议或相关的服务条款的规定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当全额赔偿法虎平台及该第三方，并使之免受损害。</span>
</p>
<p class="MsoNormal">
	11. <span>法律适用及管辖</span>
</p>
<p class="MsoNormal">
	11.1<span>本协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区适用之有效法律（但不包括其冲突法规则）。 如发生本协议与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。 如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向北京律狮科技有限公司所在地人民法院提起诉讼。</span>
</p>
<p class="MsoNormal">
	12. <span>其他及生效条件</span>
</p>
<p class="MsoNormal">
	12.1<span>本网站对本协议拥有最终的解释权。本协议及本网站有关页面的相关名词可互相引用参照，如有不同理解，则以本协议条款为准。此外，若本协议的部分条款被认定为无效或者无法实施时，本协议中的其他条款仍然有效。</span>
</p>
<p class="MsoNormal">
	12.2<span>本协议自您注册法虎平台账号，或访问、浏览及使用法虎平台之时开始生效。</span>
</p>

                    </div>`
    };
  },
  mounted() {
    if (localStorage.getItem("rememberPsw") == "true") {
      this.username = localStorage.getItem("username");
      this.userpsw = localStorage.getItem("userpsw");
      console.log(localStorage.getItem("rememberPsw"));
      this.rememberPsw = true;
    }
    this.isLoginFun();
    this.setWxerwma();
  },
  methods: {
    login() {
      let data = {
        phone: this.username,
        pass: this.userpsw
      };
      homelogin(data).then(res => {
        if (res.code == 200) {
          console.log(res.data);
          localStorage.setItem("userID", res.data.user_id);
          localStorage.setItem("userImg", res.data.picture);
          localStorage.setItem("userName", res.data.nickName);
          localStorage.setItem("username", this.username);
          localStorage.setItem("userpsw", this.userpsw);
          this.$store.commit("home/SET_Islogin", true);
          // this.$router.push({
          //   path: "/"
          // });
          window.location.href =
            "http://www.lvshilaile.com/lawtiger/#/layout/home";
        }
      });
    },
    regist() {
      let data = {
        phone: this.userNumRegist,
        pass: this.userPswRegist,
        user_name: this.userNameRegist
      };
      homeRegist(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          Message({
            type: "success",
            message: "完成注册, 已登录成功"
          });
          this.username = this.userNumRegist;
          this.userpsw = this.userPswRegist;
          this.login();
        }
      });
    },
    setWxerwma() {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js";
      const wxElement = document.body.appendChild(s);
      wxElement.onload = function() {
        new WxLogin({
          id: "qr", // 需要显示的容器id
          appid: "wx1ea6556a23944659", // 公众号appid wx*******
          scope: "snsapi_login", // 网页默认即可
          redirect_uri: encodeURIComponent(
            "http://www.lvshilaile.com/pc/Wlogin/loginindex"
          ), // 授权成功后回调的url
          state: Math.ceil(Math.random() * 1000), // 可设置为简单的随机数加session用来校验
          style: "white", // 提供"black"、"white"可选。二维码的样式
          href: "https://interface.lvshilaile.com/qrCode.css" // 外部css文件url，需要https
        });
      };
    },
    qrcodeLogin() {
      this.loginType = false;
      // window.location.href =
      //   "https://open.weixin.qq.com/connect/qrconnect?appid=wx1ea6556a23944659&redirect_uri=http://www.lvshilaile.com/pc/Wlogin/loginindex&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect";
    },
    toHome() {
      this.$router.push({
        path: "/"
      });
    },
    isLoginFun() {
      if (this.rememberPsw) {
        localStorage.setItem("username", this.username);
        localStorage.setItem("userpsw", this.userpsw);
        localStorage.setItem("rememberPsw", true);
      } else {
        localStorage.setItem("username", "no");
        localStorage.setItem("userpsw", "no");
        localStorage.setItem("rememberPsw", false);
      }
    },
    toRegist() {
      this.currentIsLogin = false;
    },
    toLogin() {
      this.currentIsLogin = true;
    },
    agreeToView() {
      this.agreeFlag = true;
    }
  },
  watch: {
    rememberPsw() {
      this.isLoginFun();
    }
  }
};
</script>
<style scoped>
#qr {
  width: 100px;
  height: 100px;
}
#qr iframe {
  width: 100px;
  height: 100px;
}
.top {
  width: 100%;
  height: 60px;
  padding-left: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: white;
}
.top > img {
  /* width: 122px; */
  height: 40px;
  cursor: pointer;
}
.content {
  width: 100%;
  height: 530px;
  padding: 70px 180px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(82deg, #43a7f5 0%, #667bf3 100%),
    linear-gradient(#ffffff, #ffffff);
}
.content > img {
  width: 314px;
  height: 387px;
}
.contentRight {
  width: 600px;
  height: 370px;
  background-color: white;
  position: relative;
}
.QRCodeTip {
  position: absolute;
  top: 10px;
  right: -100px;
  width: 55px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  padding: 0 15px;
  background-color: white;
  white-space: nowrap;
  color: #2971de;
  border-radius: 5px;
}
.QRCodeTip::after {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  position: absolute;
  /* background-color: red; */
  top: 8px;
  left: -16px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid white;
  border-left: 8px solid transparent;
}
.contentRight > img {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 55px;
  height: 50px;
  cursor: pointer;
}
.contentRight > p {
  margin-top: 51px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #2971de;
}
.box {
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Rightleft {
  width: 250px;
  height: 300px;
  /* background-color: #667bf3; */
}
.Rightleft > img {
  width: 160px;
  height: 160px;
  margin-bottom: 17px;
}
.qrcodeInfo > p {
  width: 170px;
  margin: 0 auto;
  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #2971de;
  text-align: center;
}
.RightRight {
  width: 350px;
  height: 300px;
  text-align: left;
  /* background-color: #43a7f5; */
}
.rightRinp {
  width: 300px;
  height: 42px;
  margin: 20px auto;
  background-color: #ffffff;
  border: solid 1px #e1e3e6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.rightRinp > img {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 12px;
  left: 20px;
}
.rightRinp > input {
  width: 300px;
  height: 42px;
  padding-left: 50px;
  line-height: 42px;
  box-sizing: border-box;
  border: 0;
}
.checkBox {
  width: 300px;
  margin: 0 auto 20px;
  box-sizing: border-box;
}
.loginBtn {
  width: 300px;
  height: 42px;
  margin: 0 auto;
  color: white;
  line-height: 42px;
  background-color: #2971de;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
}
/* bottom */
.layoutFooterBot {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  padding-top: 49px;
  line-height: 24px;
  border-top: 2px solid #e1e3e6;
}
.layoutFooterBot > p {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* regist */
.registTip {
  padding: 0 25px;
  box-sizing: border-box;
  margin-top: 10px;
  font-size: 0.8rem;
}
.registTip span {
  color: #2971de;
  cursor: pointer;
}
.registIsOk {
  padding: 0 25px;
  box-sizing: border-box;
  margin-top: 10px;
  font-size: 0.8rem;
}
.registIsOk span {
  color: #2971de;
  cursor: pointer;
}
</style>
<style>
.login .el-dialog__body {
  text-align: left !important;
  height: 55vh !important;
  overflow-y: scroll;
}
.login .MsoNormal {
  margin-top: 10px !important;
}
</style>