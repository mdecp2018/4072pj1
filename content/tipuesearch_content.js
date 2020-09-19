var tipuesearch = {"pages": [{'title': 'About', 'text': '專題題目:\xa0 \n 強化學習在機電系統設計與控制中之應用\xa0 \n Application of reinforcement learning in design and control of mechatronic systems \n 組員: \n 40723110 \n 40723115 \n 40723138 \n 40723148 \n 40723150 \n \n 靜態網站:  http://cad1.kmol.info \n 這是最原始的 nginx 設定: \n nginx.config.html \n default.html \n 以下測試能否正常從 downloads 目錄直接擷取 pdf 檔案: \n deep learning with python.pdf \n 以下則是將 root 只到 /home/yen/cad1_site 目錄的設定: \n default_for_cmsimde.html \n', 'tags': '', 'url': 'About.html'}, {'title': '參考資料', 'text': '\n https://easyai.tech/en/blog/reinforcement-learning-with-python/ \n https://github.com/openai/gym \n https://github.com/bhyang/gym-vrep \n https://arxiv.org/pdf/1608.05742.pdf \n https://github.com/stepjam/PyRep \n https://arxiv.org/abs/1906.11176 \n https://github.com/ycps/vrep-env \n https://towardsdatascience.com/learning-to-drive-smoothly-in-minutes-450a7cdb35f4 \n https://github.com/araffin/learning-to-drive-in-5-minutes \n https://www.learndatasci.com/tutorials/reinforcement-q-learning-scratch-python-openai-gym/ \n https://upcommons.upc.edu/bitstream/handle/2117/133279/tfm-alex-cabaneros.pdf \n', 'tags': '', 'url': '參考資料.html'}, {'title': '動態網站', 'text': '設定步驟請參考: \n https://github.com/mdecourse/project2020-1/issues/4 \n CMSiMDE 執行所需模組 \n sudo pip3 install flask flask_cors bs4 lxml \n uwsgi 所需模組 \n sudo apt install uwsgi uwsgi-plugin-python3 \n sudo pip3 install uwsgi \n /etc/nginx/sites-available/default 附加 server 設定  \n server {\n \n    listen 9443 ssl;\n    listen [::]:9443 ssl;\n \n    # 指定 static 所在位置\n    location /static {\n\talias /home/yen/cad1_site/cmsimde/static/;\n    }\n \n    location / {\n\t# 導入 uwsgi_params 設定參數\n\tinclude uwsgi_params;\n\t# 根目錄設為近端的 8080 port \n\tuwsgi_pass  127.0.0.1:8080;\n    }\n \n    ssl_certificate /home/yen/localhost.crt;\n    ssl_certificate_key /home/yen/localhost.key;\n    #ssl_certificate /etc/letsencrypt/live/cad1.kmol.info/fullchain.pem;\n    #ssl_certificate_key /etc/letsencrypt/live/cad1.kmol.info/privkey.pem;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n} \n 建立 self-signed key sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt /home/yen/uwsgi_ini/uwsgi.ini \n [uwsgi]\nsocket = :8080\nuid = yen\ngid = yen\nplugins-dir = /usr/lib/uwsgi/plugins/\nplugin = python3\nmaster = true\nprocess = 4\nthreads = 2\nchdir = /home/yen/cad1_site/cmsimde\nwsgi-file = /home/yen/cad1_site/cmsimde/wsgi.py \n uwsgi emperor 手動測試 \n /usr/bin/uwsgi --emperor /home/yen/uwsgi_ini 防火牆設定 \n 先暫時關閉 ufw \n ufw disable \n 允許設計系 IP v6 網段連線 9443 port \n ufw allow from 2001:288:6004:17::/32 to any port 9443 \n 其他網段主機一律]不准連線 \n ufw deny 9443 \n 重新開啟 ufw 防火牆 \n ufw enable \n /etc/systemd/system 目錄中建立 cmsimde.service 檔案 \n \n [Unit]\nDescription=uWSGI to serve CMSiMDE \nAfter=network.target\n \n[Service]\nUser=yen\nGroup=yen\nWorkingDirectory=/home/yen/uwsgi_ini\nExecStart=/usr/bin/uwsgi --emperor /home/yen/uwsgi_ini\n \n[Install]\nWantedBy=multi-user.target \n \n 接著將 cmsimde 服務設為隨系統開機啟動: \n sudo systemctl enable cmsimde\n \n 若要取消 cmsimde 服務隨系統開機啟動: \n sudo systemctl disable cmsimde\n \n 手動啟動 cmsimde.service 服務 \n sudo systemctl start cmsimde\n \n 手動停止 cmsimde.service 服務 \n sudo systemctl stop cmsimde \n', 'tags': '', 'url': '動態網站.html'}, {'title': '數位簽章', 'text': 'https://letsencrypt.org/ \n https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx \xa0 \n sudo apt-get update\nsudo apt-get install software-properties-common\nsudo add-apt-repository universe\nsudo apt-get update\n\nsudo apt-get install certbot python3-certbot-nginx\n\nsudo certbot certonly --nginx\n\nsudo certbot renew --dry-run \n', 'tags': '', 'url': '數位簽章.html'}, {'title': '機電控制', 'text': 'Mechatronic system control \n 控制卡: \n Arduino \n Raspberry Pi \n 機電系統: \n iRobot Create \n', 'tags': '', 'url': '機電控制.html'}, {'title': 'iRobot Create', 'text': 'https://www.cyberbotics.com/doc/guide/create \n \n https://github.com/mgobryan/pycreate \xa0 \n https://github.com/mdecourse/create_autonomy \xa0 \n iRobot Create Manual.pdf \n iRobot Create cookbook.pdf \n iRobot Create Command Module manual v2.pdf \n iRobot Create Open Interface v2.pdf \n Use Arduino to control iRobot Create.pdf \n Use Arduino to control iRobot Create_2.pdf', 'tags': '', 'url': 'iRobot Create.html'}, {'title': '深度學習', 'text': 'https://cloud4scieng.org/ \xa0雲端運算 \n https://www.uio.no/studier/emner/matnat/ifi/IN5400/v20/material/week1/ \n https://wcm.kmol.info:8443  (KMOLer only) \n https://github.com/mdecourse/cd2020pj1 \n https://cs.stanford.edu/people/karpathy/convnetjs/\xa0 \n http://neuralnetworksanddeeplearning.com/chap1.html \xa0 \n https://cs.stanford.edu/people/karpathy/convnetjs/demo/rldemo.html \n http://deeplearning.net/ \n Playing Atari with Deep Reinforcement Learning.pdf \n Robust Auto-parking: Reinforcement Learning based Real-time Planning Approach with Domain Template.pdf \n Automatic Car Parking: A Reinforcement Learning Approach.pdf \n Real-time image-based parking occupancy detection using deep learning.pdf \n \n \n 以下為 convnet javascript 應用 \n  import convnetjs library  \n \n  javascript goes here  \n \n', 'tags': '', 'url': '深度學習.html'}, {'title': '電腦', 'text': '專題可攜 22GB.7z \n 電腦輔助設計室 2016 更換的 電腦硬體 : \n 2016-2 協同設計室 6 台電腦 \n Intel Core i7-6700 3.4 GHz Ram 16GB \n 顯示卡 NVIDIA GeForce GTX 950 2GB 768 CUDA cores version 10.1 \n 安裝 Pytorch 指令 : \n pip install torch==1.5.1+cu101 torchvision==0.6.1+cu101 -f  https://download.pytorch.org/whl/torch_stable.html https://github.com/pytorch/examples Deep learning with python.pdf Deep Learning with Pytorch.pdf  ( 來源 )', 'tags': '', 'url': '電腦.html'}, {'title': 'Flask', 'text': 'Flutter 前端與後端 Flask + Keras 結合應用 \n https://medium.com/analytics-vidhya/deploy-deep-learning-models-as-rest-apis-using-keras-and-access-from-a-flutter-app-9a6752f0d907 \n \n Flutter send image file to backend: \n \n import \'package:flutter/material.dart\';\nimport \'dart:io\';\nimport \'package:http/http.dart\' as http;\nimport \'package:image_picker/image_picker.dart\';\nimport \'package:mime/mime.dart\';\nimport \'dart:convert\';\nimport \'package:http_parser/http_parser.dart\';\nimport \'package:toast/toast.dart\';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n        title: \'Image Upload Demo\',\n        theme: ThemeData(primarySwatch: Colors.pink),\n        home: ImageInput());\n  }\n}\n\nclass ImageInput extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    return _ImageInput();\n  }\n}\n\nclass _ImageInput extends State<ImageInput> {\n  // To store the file provided by the image_picker\n  File _imageFile;\n\n  // To track the file uploading state\n  bool _isUploading = false;\n\n  String baseUrl = \'http://YOUR_IPV4_ADDRESS/flutterdemoapi/api.php\';\n\n  void _getImage(BuildContext context, ImageSource source) async {\n    File image = await ImagePicker.pickImage(source: source);\n\n    setState(() {\n      _imageFile = image;\n    });\n\n    // Closes the bottom sheet\n    Navigator.pop(context);\n  }\n\n  Future<Map<String, dynamic>> _uploadImage(File image) async {\n    setState(() {\n      _isUploading = true;\n    });\n\n    // Find the mime type of the selected file by looking at the header bytes of the file\n    final mimeTypeData =\n        lookupMimeType(image.path, headerBytes: [0xFF, 0xD8]).split(\'/\');\n\n    // Intilize the multipart request\n    final imageUploadRequest =\n        http.MultipartRequest(\'POST\', Uri.parse(baseUrl));\n\n    // Attach the file in the request\n    final file = await http.MultipartFile.fromPath(\'image\', image.path,\n        contentType: MediaType(mimeTypeData[0], mimeTypeData[1]));\n\n    // Explicitly pass the extension of the image with request body\n    // Since image_picker has some bugs due which it mixes up\n    // image extension with file name like this filenamejpge\n    // Which creates some problem at the server side to manage\n    // or verify the file extension\n    imageUploadRequest.fields[\'ext\'] = mimeTypeData[1];\n\n    imageUploadRequest.files.add(file);\n\n    try {\n      final streamedResponse = await imageUploadRequest.send();\n\n      final response = await http.Response.fromStream(streamedResponse);\n\n      if (response.statusCode != 200) {\n        return null;\n      }\n\n      final Map<String, dynamic> responseData = json.decode(response.body);\n\n      _resetState();\n\n      return responseData;\n    } catch (e) {\n      print(e);\n      return null;\n    }\n  }\n\n  void _startUploading() async {\n    final Map<String, dynamic> response = await _uploadImage(_imageFile);\n    print(response);\n    // Check if any error occured\n    if (response == null || response.containsKey("error")) {\n      Toast.show("Image Upload Failed!!!", context,\n          duration: Toast.LENGTH_LONG, gravity: Toast.BOTTOM);\n    } else {\n      Toast.show("Image Uploaded Successfully!!!", context,\n          duration: Toast.LENGTH_LONG, gravity: Toast.BOTTOM);\n    }\n  }\n\n  void _resetState() {\n    setState(() {\n      _isUploading = false;\n      _imageFile = null;\n    });\n  }\n\n  void _openImagePickerModal(BuildContext context) {\n    final flatButtonColor = Theme.of(context).primaryColor;\n    print(\'Image Picker Modal Called\');\n    showModalBottomSheet(\n        context: context,\n        builder: (BuildContext context) {\n          return Container(\n            height: 150.0,\n            padding: EdgeInsets.all(10.0),\n            child: Column(\n              children: <Widget>[\n                Text(\n                  \'Pick an image\',\n                  style: TextStyle(fontWeight: FontWeight.bold),\n                ),\n                SizedBox(\n                  height: 10.0,\n                ),\n                FlatButton(\n                  textColor: flatButtonColor,\n                  child: Text(\'Use Camera\'),\n                  onPressed: () {\n                    _getImage(context, ImageSource.camera);\n                  },\n                ),\n                FlatButton(\n                  textColor: flatButtonColor,\n                  child: Text(\'Use Gallery\'),\n                  onPressed: () {\n                    _getImage(context, ImageSource.gallery);\n                  },\n                ),\n              ],\n            ),\n          );\n        });\n  }\n\n  Widget _buildUploadBtn() {\n    Widget btnWidget = Container();\n\n    if (_isUploading) {\n      // File is being uploaded then show a progress indicator\n      btnWidget = Container(\n          margin: EdgeInsets.only(top: 10.0),\n          child: CircularProgressIndicator());\n    } else if (!_isUploading && _imageFile != null) {\n      // If image is picked by the user then show a upload btn\n\n      btnWidget = Container(\n        margin: EdgeInsets.only(top: 10.0),\n        child: RaisedButton(\n          child: Text(\'Upload\'),\n          onPressed: () {\n            _startUploading();\n          },\n          color: Colors.pinkAccent,\n          textColor: Colors.white,\n        ),\n      );\n    }\n\n    return btnWidget;\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\'Image Upload Demo\'),\n      ),\n      body: Column(\n        children: <Widget>[\n          Padding(\n            padding: const EdgeInsets.only(top: 40.0, left: 10.0, right: 10.0),\n            child: OutlineButton(\n              onPressed: () => _openImagePickerModal(context),\n              borderSide:\n                  BorderSide(color: Theme.of(context).accentColor, width: 1.0),\n              child: Row(\n                mainAxisAlignment: MainAxisAlignment.center,\n                children: <Widget>[\n                  Icon(Icons.camera_alt),\n                  SizedBox(\n                    width: 5.0,\n                  ),\n                  Text(\'Add Image\'),\n                ],\n              ),\n            ),\n          ),\n          _imageFile == null\n              ? Text(\'Please pick an image\')\n              : Image.file(\n                  _imageFile,\n                  fit: BoxFit.cover,\n                  height: 300.0,\n                  alignment: Alignment.topCenter,\n                  width: MediaQuery.of(context).size.width,\n                ),\n          _buildUploadBtn(),\n        ],\n      ),\n    );\n  }\n} \n Server 端, 必須將 php 改為 Flask: \n     <?php\n    if(isset($_FILES["image"]["name"])) {\n      \n        // Make sure you have created this directory already\n        $target_dir = "uploads/";\n      \n        // Generate a random name \n        $target_file = $target_dir . md5(time()) . \'.\' . $_POST[\'ext\'];\n        $check = getimagesize($_FILES["image"]["tmp_name"]);\n        if($check !== false) {\n            if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {\n          echo json_encode([\'response\' => "The image has been uploaded."]);\n           }else {\n          echo json_encode(["error" => "Sorry, there was an error uploading your file."]); \n        }\n        } else {\n            echo json_encode(["error" => "File is not an image."]);\n           \n        }\n    }\n     else {\n         echo json_encode(["error" => "Please provide a image to upload"]);\n    }\n    ?> \n \n', 'tags': '', 'url': 'Flask.html'}, {'title': '強化學習', 'text': 'Artificial Intelligence (  人工智慧系列課程 ) \n \n Machine Learning ( 機器學習系列課程 ) \n \n Reinforcement Learning ( 強化學習系列課程 ) \n Learn to make good sequences of decision. \n \n https://github.com/keras-rl/keras-rl \n https://towardsdatascience.com/learning-reinforcement-learning-reinforce-with-pytorch-5e8ad7fc7da0 \n https://github.com/astooke/rlpyt \xa0( Document ) ( Blog ) \n https://github.com/p-christ/Deep-Reinforcement-Learning-Algorithms-with-PyTorch \n https://openai.com/blog/openai-baselines-ppo/ \xa0 \n Deep Q Learning \n \n Vanilla Policy Gradient Method \n Trust Region / Natural Policy Gradient Methods \n Proximal Policy Optimization Algorithms.pdf \xa0( 近端策略優化原理) \n https://pytorch.org/tutorials/intermediate/reinforcement_q_learning.html \n https://www.mlq.ai/deep-reinforcement-learning-pytorch-implementation/', 'tags': '', 'url': '強化學習.html'}, {'title': 'CMSiMDE', 'text': 'https://websitesetup.org/bootstrap-tutorial-for-beginners/ \n https://colorlib.com/wp/themes/travelify/ \xa0 \n https://github.com/puikinsh/travelify \n \n', 'tags': '', 'url': 'CMSiMDE.html'}]};