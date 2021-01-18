var tipuesearch = {"pages": [{'title': 'About', 'text': '專題題目:\xa0 \n 強化學習在機電系統設計與控制中之應用\xa0 \n Application of reinforcement learning in design and control of mechatronic systems \n 組員: \n 40723110 \n 40723115 \n 40723138 \n 40723148 \n 40723150 \n \n 靜態網站:  http://cad1.kmol.info \n 這是最原始的 nginx 設定: \n nginx.config.html \n default.html \n 以下測試能否正常從 downloads 目錄直接擷取 pdf 檔案: \n deep learning with python.pdf \n 以下則是將 root 只到 /home/yen/cad1_site 目錄的設定: \n default_for_cmsimde.html \n', 'tags': '', 'url': 'About.html'}, {'title': '專題定位', 'text': '2021/01/08 \n /downloads/2017_An overview of gradient descent optimizationalgorithms.pdf \n 利用  Webots  與\xa0 https://github.com/mdecourse/deepbots, \xa0透過  https://github.com/mdecourse/deepbots-tutorials \xa0與  https://github.com/mdecourse/deepworlds \xa0進一步了解 deepbots 如何應用在 Webots 中的受控系統. \n 專題目的在探討與  http://mde.tw/airhockey \xa0( https://github.com/mdecourse/airhockey  )中虛實整合系統設計與控制有關的機器學習應用. \n 下載  Webots_R2020brev1_portable.7z \n 參考資料: \n https://github.com/mdecourse/RL_Webots \xa0 \n Deep Reinforcement Learning.pdf \xa0(2019) \n 2020_Book_DeepReinforcementLearning.pdf \n 2019_Learning to Walk via Deep Reinforcement Learning \n 2016_3d_simulated_robot_manipulation_using_deep_reinforcement_learning.pdf \n 2002_Book_HandbookOfMarkovDecisionProces.pdf \n Deepbots: A Webots-Based Deep Reinforcement Learning Framework for Robotics', 'tags': '', 'url': '專題定位.html'}, {'title': 'LaTeX', 'text': 'https://github.com/sppmg/TW_Thesis_Template/wiki/無腦手冊 \n https://github.com/wengan-li/ncku-thesis-template-latex \n https://github.com/HW-Lee/nthu-thesis-template   \n     Features & Benefits\n    Templates\n    Plans & Pricing\n    Help\n    Register\n    Log In\n\nNTUST Thesis template 1.7.1 (Chinese Version)\nAuthor\nDing-Jie Huang, Chien-Chun Ni\nLicense\nCreative Commons CC BY 4.0\nAbstract\n\nThis is the Chinese Version of NTUST thesis template v1.7.1, please check "NTUST Thesis template Overleaf English Version" if you need the English one.\n\n本範本是為台灣科技大學同學們所編寫的碩博士論文Latex模板， 主要由元智大學碩博士論文latex範本改編而來， 期望加快各位同學撰寫論文的速度。\n\nP.S 原始陳念波老師的元智大學論文範本為 http://exciton.eo.yzu.edu.tw/~lab/latex/latex_note.html\n\nSupport 14pt font for this version\nTags\nFind More Templates\nNTUST Thesis template 1.7.1 (Chinese Version)\n\n    © 2020 OverleafPrivacy and TermsSecurityContact UsAboutBlog\n\n    Overleaf on TwitterOverleaf on FacebookOverleaf on LinkedIn\n\nSource\n\n% this file is encoded in utf-8\n% v1.7\n\n\\documentclass[12pt, a4paper]{ntust_report} \n\n\\usepackage{fontspec}   %加這個就可以設定字體 \n\\usepackage{xeCJK}       %讓中英文字體分開設置 \n\n%設定主要字型，也就是英文字型\n\\setmainfont[Mapping=tex-text]{Times New Roman}            \n\n%設定中文字型\n%參考 https://www.overleaf.com/learn/latex/Questions/What_OTF/TTF_fonts_are_supported_via_fontspec%3F#Chinese\n\\setCJKmainfont{cwTeXKai}      \n\n\\XeTeXlinebreaklocale "zh"                %這兩行一定要加，中文才能自動換行 \n\\XeTeXlinebreakskip = 0pt plus 1pt       %這兩行一定要加，中文才能自動換行\n\n\\input{common_env}  %基本的環境設定  無需改變  \n\n\\begin{document}\n\n\n\t\\input{chinese_trans} %在此檔案處定義文章中的中文名詞\n\n\t%----------------------------------------------------------------------------------------------------------------------------------------------------------\n\t%%% 以下是載入前頁、本文、後頁\n\t% 此行請勿更動\n\n\t%----------------------------------------------------------------------------------------------------------------------------------------------------------\n\t% front matter 前頁\n\t% 包括封面、書名頁、中文摘要、英文摘要、誌謝、目錄、表目錄、圖目錄、符號說明\n\t% 在撰寫各章草稿時，可以把此部份「關掉」，以節省無謂的編譯時間。\n\t% 實際內容由\n\t%    my_names.tex, my_cabstract.tex, my_eabstract.tex, my_ackn.tex, my_symbols.tex\n\t% 決定\n\t% ntust_frontpages.tex 此檔只提供整體架構的定義，不需更動\n\t% 在撰寫各章草稿時，可以把此部份「關掉」，以節省無謂的編譯時間。\n\t\n\t\\input{frontpages/ntust_frontpages.tex} \n\n\n\n\n\t%----------------------------------------------------------------------------------------------------------------------------------------------------------\n\t% main body 論文主體。建議以「章」為檔案分割的依據。\n\t% 以下為建議的命名分類\n\t%   introduction.tex   related_work.tex  protocol.tex  evaluation.tex  conclusion.tex\n\t% 做為這幾個「章」的檔案名稱，並將檔案存放於資料夾 sections/ 下\n\t% 實際命名方式可以隨你意\n\t% 在撰寫各章草稿時，可以把其他章節關掉 (行首加百分號)\n\t%\\input{example/example_body.tex}  % 所附的範例\n\n\t\\input{sections/introduction.tex}\n\t\\input{sections/relative-work.tex}\n\t\\input{sections/method.tex}\n\t\\input{sections/Design.tex}\n\t\\input{sections/evaluation.tex}\n\t\\input{sections/Conclusion.tex}\n\n\t%----------------------------------------------------------------------------------------------------------------------------------------------------------\n\t% back pages 後頁\n\t% 包括參考文獻、附錄、自傳\n\t% 實際內容由\n\t%    my_bib.bib, my_appendix.tex, my_vita.tex\n\t% 決定\n\t% ntust_backpages.tex 此檔只提供整體架構的定義，不需更動\n\t% 在撰寫各章草稿時，可以把此部份「關掉」，以節省無謂的編譯時間。\n\t%\\bibliographystyle{unsrt} \n\t\\input{backpages/ntust_backpages.tex}\n\t%\\bibliographystyle{unsrt} \n\n\n\n\\end{document} \n \n\n \n', 'tags': '', 'url': 'LaTeX.html'}, {'title': '參考資料', 'text': '\n https://easyai.tech/en/blog/reinforcement-learning-with-python/ \n https://github.com/openai/gym \n https://github.com/bhyang/gym-vrep \n https://arxiv.org/pdf/1608.05742.pdf \n https://github.com/stepjam/PyRep \n https://arxiv.org/abs/1906.11176 \n https://github.com/ycps/vrep-env \n https://towardsdatascience.com/learning-to-drive-smoothly-in-minutes-450a7cdb35f4 \n https://github.com/araffin/learning-to-drive-in-5-minutes \n https://www.learndatasci.com/tutorials/reinforcement-q-learning-scratch-python-openai-gym/ \n https://upcommons.upc.edu/bitstream/handle/2117/133279/tfm-alex-cabaneros.pdf \n', 'tags': '', 'url': '參考資料.html'}, {'title': '研究生考試', 'text': 'csme 研究生考試科目與題型:  考試內容 及 考古題', 'tags': '', 'url': '研究生考試.html'}, {'title': '動態網站', 'text': '設定步驟請參考: \n https://github.com/mdecourse/project2020-1/issues/4 \n CMSiMDE 執行所需模組 \n sudo pip3 install flask flask_cors bs4 lxml \n uwsgi 所需模組 \n sudo apt install uwsgi uwsgi-plugin-python3 \n sudo pip3 install uwsgi \n /etc/nginx/sites-available/default 附加 server 設定  \n server {\n \n    listen 9443 ssl;\n    listen [::]:9443 ssl;\n \n    # 指定 static 所在位置\n    location /static {\n\talias /home/yen/cad1_site/cmsimde/static/;\n    }\n \n    location / {\n\t# 導入 uwsgi_params 設定參數\n\tinclude uwsgi_params;\n\t# 根目錄設為近端的 8080 port \n\tuwsgi_pass  127.0.0.1:8080;\n    }\n \n    ssl_certificate /home/yen/localhost.crt;\n    ssl_certificate_key /home/yen/localhost.key;\n    #ssl_certificate /etc/letsencrypt/live/cad1.kmol.info/fullchain.pem;\n    #ssl_certificate_key /etc/letsencrypt/live/cad1.kmol.info/privkey.pem;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n} \n 建立 self-signed key sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt /home/yen/uwsgi_ini/uwsgi.ini \n [uwsgi]\nsocket = :8080\nuid = yen\ngid = yen\nplugins-dir = /usr/lib/uwsgi/plugins/\nplugin = python3\nmaster = true\nprocess = 4\nthreads = 2\nchdir = /home/yen/cad1_site/cmsimde\nwsgi-file = /home/yen/cad1_site/cmsimde/wsgi.py \n uwsgi emperor 手動測試 \n /usr/bin/uwsgi --emperor /home/yen/uwsgi_ini 防火牆設定 \n 先暫時關閉 ufw \n ufw disable \n 允許設計系 IP v6 網段連線 9443 port \n ufw allow from 2001:288:6004:17::/32 to any port 9443 \n 其他網段主機一律]不准連線 \n ufw deny 9443 \n 重新開啟 ufw 防火牆 \n ufw enable \n /etc/systemd/system 目錄中建立 cmsimde.service 檔案 \n \n [Unit]\nDescription=uWSGI to serve CMSiMDE \nAfter=network.target\n \n[Service]\nUser=yen\nGroup=yen\nWorkingDirectory=/home/yen/uwsgi_ini\nExecStart=/usr/bin/uwsgi --emperor /home/yen/uwsgi_ini\n \n[Install]\nWantedBy=multi-user.target \n \n 接著將 cmsimde 服務設為隨系統開機啟動: \n sudo systemctl enable cmsimde\n \n 若要取消 cmsimde 服務隨系統開機啟動: \n sudo systemctl disable cmsimde\n \n 手動啟動 cmsimde.service 服務 \n sudo systemctl start cmsimde\n \n 手動停止 cmsimde.service 服務 \n sudo systemctl stop cmsimde \n', 'tags': '', 'url': '動態網站.html'}, {'title': '數位簽章', 'text': 'https://letsencrypt.org/ \n https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx \xa0 \n sudo apt-get update\nsudo apt-get install software-properties-common\nsudo add-apt-repository universe\nsudo apt-get update\n\nsudo apt-get install certbot python3-certbot-nginx\n\nsudo certbot certonly --nginx\n\nsudo certbot renew --dry-run \n \n', 'tags': '', 'url': '數位簽章.html'}, {'title': '機電控制', 'text': 'Mechatronic system control \n 控制卡: \n Arduino \n Raspberry Pi \n 機電系統: \n iRobot Create \n', 'tags': '', 'url': '機電控制.html'}, {'title': 'iRobot Create', 'text': 'https://www.cyberbotics.com/doc/guide/create \n \n https://github.com/mgobryan/pycreate \xa0 \n https://github.com/mdecourse/create_autonomy \xa0 \n iRobot Create Manual.pdf \n iRobot Create cookbook.pdf \n iRobot Create Command Module manual v2.pdf \n iRobot Create Open Interface v2.pdf \n Use Arduino to control iRobot Create.pdf \n Use Arduino to control iRobot Create_2.pdf \n', 'tags': '', 'url': 'iRobot Create.html'}, {'title': '深度學習', 'text': 'Solving Nonlinear andHigh-Dimensional PartialDifferential Equations viaDeep Learning.pdf \n https://github.com/alialaradi/DeepGalerkinMethod \n DGM A deep learning algorithm for solving partial differentialequations.pdf \n \n https://cloud4scieng.org/ \xa0雲端運算 \n https://www.uio.no/studier/emner/matnat/ifi/IN5400/v20/material/week1/ \n https://wcm.kmol.info:8443  (KMOLer only) \n https://github.com/mdecourse/cd2020pj1 \n https://cs.stanford.edu/people/karpathy/convnetjs/\xa0 \n http://neuralnetworksanddeeplearning.com/chap1.html \xa0 \n https://cs.stanford.edu/people/karpathy/convnetjs/demo/rldemo.html \n http://deeplearning.net/ \n Playing Atari with Deep Reinforcement Learning.pdf \n Robust Auto-parking: Reinforcement Learning based Real-time Planning Approach with Domain Template.pdf \n Automatic Car Parking: A Reinforcement Learning Approach.pdf \n Real-time image-based parking occupancy detection using deep learning.pdf \n \n \n 以下為 convnet javascript 應用 \n  import convnetjs library  \n \n  javascript goes here  \n \n \n', 'tags': '', 'url': '深度學習.html'}, {'title': '電腦', 'text': '專題可攜 22GB.7z \n 電腦輔助設計室 2016 更換的 電腦硬體 : \n 2016-2 協同設計室 6 台電腦 \n Intel Core i7-6700 3.4 GHz Ram 16GB \n 顯示卡 NVIDIA GeForce GTX 950 2GB 768 CUDA cores version 10.1 \n 安裝 Pytorch 指令 : \n pip install torch==1.5.1+cu101 torchvision==0.6.1+cu101 -f  https://download.pytorch.org/whl/torch_stable.html https://github.com/pytorch/examples Deep learning with python.pdf Deep Learning with Pytorch.pdf  ( 來源 ) \n', 'tags': '', 'url': '電腦.html'}, {'title': 'Flask', 'text': 'Flutter 前端與後端 Flask + Keras 結合應用 \n https://medium.com/analytics-vidhya/deploy-deep-learning-models-as-rest-apis-using-keras-and-access-from-a-flutter-app-9a6752f0d907 \n \n Flutter send image file to backend: \n \n import \'package:flutter/material.dart\';\nimport \'dart:io\';\nimport \'package:http/http.dart\' as http;\nimport \'package:image_picker/image_picker.dart\';\nimport \'package:mime/mime.dart\';\nimport \'dart:convert\';\nimport \'package:http_parser/http_parser.dart\';\nimport \'package:toast/toast.dart\';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n        title: \'Image Upload Demo\',\n        theme: ThemeData(primarySwatch: Colors.pink),\n        home: ImageInput());\n  }\n}\n\nclass ImageInput extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    return _ImageInput();\n  }\n}\n\nclass _ImageInput extends State<ImageInput> {\n  // To store the file provided by the image_picker\n  File _imageFile;\n\n  // To track the file uploading state\n  bool _isUploading = false;\n\n  String baseUrl = \'http://YOUR_IPV4_ADDRESS/flutterdemoapi/api.php\';\n\n  void _getImage(BuildContext context, ImageSource source) async {\n    File image = await ImagePicker.pickImage(source: source);\n\n    setState(() {\n      _imageFile = image;\n    });\n\n    // Closes the bottom sheet\n    Navigator.pop(context);\n  }\n\n  Future<Map<String, dynamic>> _uploadImage(File image) async {\n    setState(() {\n      _isUploading = true;\n    });\n\n    // Find the mime type of the selected file by looking at the header bytes of the file\n    final mimeTypeData =\n        lookupMimeType(image.path, headerBytes: [0xFF, 0xD8]).split(\'/\');\n\n    // Intilize the multipart request\n    final imageUploadRequest =\n        http.MultipartRequest(\'POST\', Uri.parse(baseUrl));\n\n    // Attach the file in the request\n    final file = await http.MultipartFile.fromPath(\'image\', image.path,\n        contentType: MediaType(mimeTypeData[0], mimeTypeData[1]));\n\n    // Explicitly pass the extension of the image with request body\n    // Since image_picker has some bugs due which it mixes up\n    // image extension with file name like this filenamejpge\n    // Which creates some problem at the server side to manage\n    // or verify the file extension\n    imageUploadRequest.fields[\'ext\'] = mimeTypeData[1];\n\n    imageUploadRequest.files.add(file);\n\n    try {\n      final streamedResponse = await imageUploadRequest.send();\n\n      final response = await http.Response.fromStream(streamedResponse);\n\n      if (response.statusCode != 200) {\n        return null;\n      }\n\n      final Map<String, dynamic> responseData = json.decode(response.body);\n\n      _resetState();\n\n      return responseData;\n    } catch (e) {\n      print(e);\n      return null;\n    }\n  }\n\n  void _startUploading() async {\n    final Map<String, dynamic> response = await _uploadImage(_imageFile);\n    print(response);\n    // Check if any error occured\n    if (response == null || response.containsKey("error")) {\n      Toast.show("Image Upload Failed!!!", context,\n          duration: Toast.LENGTH_LONG, gravity: Toast.BOTTOM);\n    } else {\n      Toast.show("Image Uploaded Successfully!!!", context,\n          duration: Toast.LENGTH_LONG, gravity: Toast.BOTTOM);\n    }\n  }\n\n  void _resetState() {\n    setState(() {\n      _isUploading = false;\n      _imageFile = null;\n    });\n  }\n\n  void _openImagePickerModal(BuildContext context) {\n    final flatButtonColor = Theme.of(context).primaryColor;\n    print(\'Image Picker Modal Called\');\n    showModalBottomSheet(\n        context: context,\n        builder: (BuildContext context) {\n          return Container(\n            height: 150.0,\n            padding: EdgeInsets.all(10.0),\n            child: Column(\n              children: <Widget>[\n                Text(\n                  \'Pick an image\',\n                  style: TextStyle(fontWeight: FontWeight.bold),\n                ),\n                SizedBox(\n                  height: 10.0,\n                ),\n                FlatButton(\n                  textColor: flatButtonColor,\n                  child: Text(\'Use Camera\'),\n                  onPressed: () {\n                    _getImage(context, ImageSource.camera);\n                  },\n                ),\n                FlatButton(\n                  textColor: flatButtonColor,\n                  child: Text(\'Use Gallery\'),\n                  onPressed: () {\n                    _getImage(context, ImageSource.gallery);\n                  },\n                ),\n              ],\n            ),\n          );\n        });\n  }\n\n  Widget _buildUploadBtn() {\n    Widget btnWidget = Container();\n\n    if (_isUploading) {\n      // File is being uploaded then show a progress indicator\n      btnWidget = Container(\n          margin: EdgeInsets.only(top: 10.0),\n          child: CircularProgressIndicator());\n    } else if (!_isUploading && _imageFile != null) {\n      // If image is picked by the user then show a upload btn\n\n      btnWidget = Container(\n        margin: EdgeInsets.only(top: 10.0),\n        child: RaisedButton(\n          child: Text(\'Upload\'),\n          onPressed: () {\n            _startUploading();\n          },\n          color: Colors.pinkAccent,\n          textColor: Colors.white,\n        ),\n      );\n    }\n\n    return btnWidget;\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\'Image Upload Demo\'),\n      ),\n      body: Column(\n        children: <Widget>[\n          Padding(\n            padding: const EdgeInsets.only(top: 40.0, left: 10.0, right: 10.0),\n            child: OutlineButton(\n              onPressed: () => _openImagePickerModal(context),\n              borderSide:\n                  BorderSide(color: Theme.of(context).accentColor, width: 1.0),\n              child: Row(\n                mainAxisAlignment: MainAxisAlignment.center,\n                children: <Widget>[\n                  Icon(Icons.camera_alt),\n                  SizedBox(\n                    width: 5.0,\n                  ),\n                  Text(\'Add Image\'),\n                ],\n              ),\n            ),\n          ),\n          _imageFile == null\n              ? Text(\'Please pick an image\')\n              : Image.file(\n                  _imageFile,\n                  fit: BoxFit.cover,\n                  height: 300.0,\n                  alignment: Alignment.topCenter,\n                  width: MediaQuery.of(context).size.width,\n                ),\n          _buildUploadBtn(),\n        ],\n      ),\n    );\n  }\n} \n Server 端, 必須將 php 改為 Flask: \n     <?php\n    if(isset($_FILES["image"]["name"])) {\n      \n        // Make sure you have created this directory already\n        $target_dir = "uploads/";\n      \n        // Generate a random name \n        $target_file = $target_dir . md5(time()) . \'.\' . $_POST[\'ext\'];\n        $check = getimagesize($_FILES["image"]["tmp_name"]);\n        if($check !== false) {\n            if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {\n          echo json_encode([\'response\' => "The image has been uploaded."]);\n           }else {\n          echo json_encode(["error" => "Sorry, there was an error uploading your file."]); \n        }\n        } else {\n            echo json_encode(["error" => "File is not an image."]);\n           \n        }\n    }\n     else {\n         echo json_encode(["error" => "Please provide a image to upload"]);\n    }\n    ?> \n \n \n', 'tags': '', 'url': 'Flask.html'}, {'title': '強化學習', 'text': 'https://github.com/dennybritz/reinforcement-learning   \n http://incompleteideas.net/book/RLbook2018.pdf   \n Artificial Intelligence (  人工智慧系列課程 ) \n \n Machine Learning ( 機器學習系列課程 ) \n \n Reinforcement Learning ( 強化學習系列課程 ) \n Learn to make good sequences of decision. \n \n https://github.com/keras-rl/keras-rl \n https://towardsdatascience.com/learning-reinforcement-learning-reinforce-with-pytorch-5e8ad7fc7da0 \n https://github.com/astooke/rlpyt \xa0( Document ) ( Blog ) \n https://github.com/p-christ/Deep-Reinforcement-Learning-Algorithms-with-PyTorch \n https://openai.com/blog/openai-baselines-ppo/ \xa0 \n Deep Q Learning \n \n Vanilla Policy Gradient Method \n Trust Region / Natural Policy Gradient Methods \n Proximal Policy Optimization Algorithms.pdf \xa0( 近端策略優化原理) \n https://pytorch.org/tutorials/intermediate/reinforcement_q_learning.html \n https://www.mlq.ai/deep-reinforcement-learning-pytorch-implementation/', 'tags': '', 'url': '強化學習.html'}, {'title': '2021', 'text': 'need Python and Node.js and Typescript \n https://github.com/Positronic-IO/air-hockey-training-environment \xa0 \n https://github.com/Positronic-IO/air-hockey-web-ui \xa0 \n https://jonathan-hui.medium.com/rl-dqn-deep-q-network-e207751f7ae4 \xa0 \n https://keon.github.io/ \xa0', 'tags': '', 'url': '2021.html'}, {'title': 'Reference', 'text': '2018_Robotic Harvesting of Fruiting Vegetables-A Simulation Approach in V-REP, ROS and MATLAB.pdf \n 2019_Hovering Control of a Quadrotor.pdf \n 2019_Accelerating Training of Deep Reinforcement Learning-based Autonomous Driving Agents Through Comparative Study of Agent and Environment Designs.pdf \n 2018_Curved Path Following with Deep Reinforcement Learning-Results from Three Vessel Models.pdf \n 2019_Application of deep reinforcement learning for control problems.pdf \n 2018_Path Following in Simulated Environments using the A3C Reinforcement Learning Method.pdf \n FlashRL_A Reinforcement Learning Platform.pdf', 'tags': '', 'url': 'Reference.html'}, {'title': '類神經網路學習', 'text': 'nn_and_air_hockey.7z \n 將  https://github.com/Purusharth07/Ping-Pong-Neural-Game- \xa0 改為  tensorflow 2.0  版本, 使用 Pygame 模擬.', 'tags': '', 'url': '類神經網路學習.html'}, {'title': 'neural_network_in_python.pdf', 'text': '說明前三章的程式碼 \n 2LayerNeuralNetwork.py \n origin  codes: \n # 2 Layer Neural Network in NumPy\nimport numpy as np\n# X = input of our 3 input XOR gate\n# set up the inputs of the neural network (right from the table)\nX = np.array(([0,0,0],[0,0,1],[0,1,0], [0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]), dtype=float)\n# y = our output of our neural network\ny = np.array(([1], [0], [0], [0], [0], [0], [0], [1]), dtype=float)\n# what value we want to predict\nxPredicted = np.array(([0,0,1]), dtype=float)\nX = X/np.amax(X, axis=0) # maximum of X input array\n# maximum of xPredicted (our input data for the prediction)\nxPredicted = xPredicted/np.amax(xPredicted, axis=0)\n# set up our Loss file for graphing\nlossFile = open("SumSquaredLossList.csv", "w")\nclass Neural_Network (object):\n    def __init__(self):\n        #parameters\n        self.inputLayerSize = 3 # X1,X2,X3\n        self.outputLayerSize = 1 # Y1\n        self.hiddenLayerSize = 4 # Size of the hidden layer\n        # build weights of each layer\n        # set to random values\n        # look at the interconnection diagram to make sense of this\n        # 3x4 matrix for input to hidden\n        self.W1 = np.random.randn(self.inputLayerSize, self.hiddenLayerSize)\n        # 4x1 matrix for hidden layer to output\n        self.W2 = np.random.randn(self.hiddenLayerSize, self.outputLayerSize)\n    def feedForward(self, X):\n        # feedForward propagation through our network\n        # dot product of X (input) and first set of 3x4 weights\n        self.z = np.dot(X, self.W1)\n        # the activationSigmoid activation function - neural magic\n        self.z2 = self.activationSigmoid(self.z)\n        # dot product of hidden layer (z2) and second set of 4x1 weights\n        self.z3 = np.dot(self.z2, self.W2)\n        # final activation function - more neural magic\n        o = self.activationSigmoid(self.z3)\n        return o\n     def backwardPropagate(self, X, y, o):\n        # backward propagate through the network\n        # calculate the error in output\n        self.o_error = y - o\n        # apply derivative of activationSigmoid to error\n        self.o_delta = self.o_error*self.activationSigmoidPrime(o)\n        # z2 error: how much our hidden layer weights contributed to output\n        # error\n        self.z2_error = self.o_delta.dot(self.W2.T)\n        # applying derivative of activationSigmoid to z2 error\n        self.z2_delta = self.z2_error*self.activationSigmoidPrime(self.z2)\n        # adjusting first set (inputLayer --> hiddenLayer) weights\n        self.W1 += X.T.dot(self.z2_delta)\n        # adjusting second set (hiddenLayer --> outputLayer) weights\n        self.W2 += self.z2.T.dot(self.o_delta)\n    def trainNetwork(self, X, y):\n        # feed forward the loop\n        o = self.feedForward(X)\n        # and then back propagate the values (feedback)\n        self.backwardPropagate(X, y, o)\n    def activationSigmoid(self, s):\n        # activation function\n        # simple activationSigmoid curve as in the book\n        return 1/(1+np.exp(-s))\n    def activationSigmoidPrime(self, s):\n        # First derivative of activationSigmoid\n        # calculus time!\n        return s * (1 - s)\n    def saveSumSquaredLossList(self,i,error):\n        lossFile.write(str(i)+","+str(error.tolist())+\'\\n\')\n    def saveWeights(self):\n        # save this in order to reproduce our cool network\n        np.savetxt("weightsLayer1.txt", self.W1, fmt="%s")\n        np.savetxt("weightsLayer2.txt", self.W2, fmt="%s")\n    def predictOutput(self):\n        print ("Predicted XOR output data based on trained weights: ")\n        print ("Expected (X1-X3): \\n" + str(xPredicted))\n        print ("Output (Y1): \\n" + str(self.feedForward(xPredicted)))\n\nmyNeuralNetwork = Neural_Network()\ntrainingEpochs = 1000\n#trainingEpochs = 100000\n\nfor i in range(trainingEpochs): # train myNeuralNetwork 1,000 times\n    print ("Epoch # " + str(i) + "\\n")\n    print ("Network Input : \\n" + str(X))\n    print ("Expected Output of XOR Gate Neural Network: \\n" + str(y))\n    print ("Actual Output from XOR Gate Neural Network: \\n" + \\\n    str(myNeuralNetwork.feedForward(X)))\n    # mean sum squared loss\n    Loss = np.mean(np.square(y - myNeuralNetwork.feedForward(X)))\n    myNeuralNetwork.saveSumSquaredLossList(i,Loss)\n    print ("Sum Squared Loss: \\n" + str(Loss))\n    print ("\\n")\n    myNeuralNetwork.trainNetwork(X, y)\n\nmyNeuralNetwork.saveWeights()\nmyNeuralNetwork.predictOutput()p \n 定義input(X)和output(Y) \n X = np.array(([0,0,0],[0,0,1],[0,1,0], [0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]), dtype=float)\ny = np.array(([1], [0], [0], [0], [0], [0], [0], [1]), dtype=float) \n 設定神經元及權重 \n ```python\n def __init__(self):\n        # X1,X2,X3(自訂義input的神經元數量)\n        self.inputLayerSize = 3\n        # Y1(自訂義output的神經元數量)   \n        self.outputLayerSize = 1\n        # Size of the hidden layer(自訂義hiddenLayer的神經元數量)          \n        self.hiddenLayerSize = 4 \n        \n        # 設定第一層權重為隨機數值，input--->hidden\n        self.W1 = np.random.randn(self.inputLayerSize, self.hiddenLayerSize)\n        \n        # 設定第二層權重為隨機數值，hidden--->output\n        self.W2 = np.random.randn(self.hiddenLayerSize, self.outputLayerSize)\n``` \n feedForward(前饋) \n \n (圖片來源) \n  def feedForward(self, X):\n        # 第一層的動態方程式(activation function)輸入(z)\n        # z(activation function) = 第一層所有神經元的 input * weights 總和輸入到第二層的其中一個神經元\n        self.z = np.dot(X, self.W1)\n\n        # 第一層的動態方程式(activation function)輸出(a)\n        # z2(a) = 動態方程式(activation function)用Sigmoid function算法\n        self.z2 = self.activationSigmoid(self.z)\n\n        # 第二層的動態方程式(activation function)輸入(z)\n        # z3(activation function) = 第二層所有神經元的 input * weights 總和輸入到輸出層的(其中一個)神經元\n        self.z3 = np.dot(self.z2, self.W2)\n\n        # 第二層的動態方程式(activation function)輸出(a)\n        # o(a) = 動態方程式(activation function)用Sigmoid function算法\n        o = self.activationSigmoid(self.z3)\n\n        # 回傳出前饋結果\n        return o \n backwardPropagate(反向傳播) \n def backwardPropagate(self, X, y, o):\n        # 計算輸出誤差\n        self.o_error = y - o\n\n        # 將Sigmoid function算法用在輸出誤差(錯誤、error)\n        self.o_delta = self.o_error*self.activationSigmoidPrime(o)\n\n        # 隱藏層的輸出誤差*權重\n        self.z2_error = self.o_delta.dot(self.W2.T)\n\n        # 將Sigmoid function算法用在隱藏層輸出誤差(錯誤、error)\n        self.z2_delta = self.z2_error*self.activationSigmoidPrime(self.z2)\n\n        # 糾正第一層權重數值，input--->hidden\n        self.W1 += X.T.dot(self.z2_delta)\n        # 糾正第二層權重數值，hidden--->output\n        self.W2 += self.z2.T.dot(self.o_delta) \n trainNetwork(訓練流程) \n def trainNetwork(self, X, y):\n        # 前饋循環 \n        o = self.feedForward(X)\n        # 反向傳播值\n        self.backwardPropagate(X, y, o) \n activationSigmoid \n def activationSigmoid(self, s):\n        # activation function\n        # 使用Sigmoid function算法(S-curve)\n        return 1/(1+np.exp(-s)) \n activationSigmoidPrime \n def activationSigmoidPrime(self, s):\n        # First derivative of activationSigmoid\n        # calculus time!\n        return s * (1 - s) \n saveSumSquaredLossList(儲存損失函數值) \n  def saveSumSquaredLossList(self,i,error):\n        lossFile.write(str(i)+","+str(error.tolist())+\'\\n\') \n saveWeights(儲存權重值) \n  def saveWeights(self):\n        np.savetxt("weightsLayer1.txt", self.W1, fmt="%s")\n        np.savetxt("weightsLayer2.txt", self.W2, fmt="%s") \n predictOutput(結果輸出) \n def predictOutput(self):\n        print ("Predicted XOR output data based on trained weights: ")\n        print ("Expected (X1-X3): \\n" + str(xPredicted))\n        print ("Output (Y1): \\n" + str(self.feedForward(xPredicted))) \n Epochs(疊代次數，feedForward+backprogation運算完算一次疊代) \n # 訓練疊代次數\ntrainingEpochs = 1000 \n', 'tags': '', 'url': 'neural_network_in_python.pdf.html'}, {'title': 'Flutter', 'text': 'Flutter 與 Android sdk 版本差異問題解決:  https://stackoverflow.com/questions/60440509/android-command-line-tools-sdkmanager-always-shows-warning-could-not-create-se/61613986#61613986 \n Flask 與 ML 系統在後端, Flutter 作為前端 \n https://medium.com/analytics-vidhya/deploy-ml-models-using-flask-as-rest-api-and-access-via-flutter-app-7ce63d5c1f3b \n https://medium.com/@pyzimos/flutter-chatbot-with-python-flask-backend-heroku-deployment-706baafbb8f1 \n https://github.com/SHARONZACHARIA/Deploy-ML-model \n https://github.com/tonynguyen72/Flask_API_Flutter \n https://github.com/mohammedhashim44/Flutter-Flask-Login \n', 'tags': '', 'url': 'Flutter.html'}, {'title': 'CMSiMDE', 'text': 'https://websitesetup.org/bootstrap-tutorial-for-beginners/ \n https://colorlib.com/wp/themes/travelify/ \xa0 \n https://github.com/puikinsh/travelify \n \n', 'tags': '', 'url': 'CMSiMDE.html'}]};