/*************************************

项目名称：theme
下载地址：
脚本作者：iOS151
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https://buy.itunes.apple.com/verifyReceipt url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/theme.js
[mitm]
hostname = buy.itunes.apple.com


**************************************

var name1908 = JSON.parse($response.body);

name1908={
{
  "data": {
    "id": 1376852,
    "nickname": "195****4931",
    "isVistor": true,
    "phone": "19535164931",
    "isBindWX": true,
    "isBindApple": true,
    "isBindQQ": true,
    "had_vip": true,
    "goods_policy": "正常方案",
    "role": "",
    "score": 2,
    "had_interests": true,
    "vip_type_status": 1,
    "phone_name": "195****4931",
    "isNew": true,
    "register_time": "2024-05-20 19:12:53",
    "order_id": null
  },
  "node": 2,
  "code": 200,
  "t": "2024-05-20 19:25:05"
}
$done({body : JSON.stringify(name1908)});
