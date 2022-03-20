---
sidebar_position: 2
---

# HttpЭ��

 IoTSharp֧��HttpЭ���ϴ�ң�����ݣ� ����ͨ����׼�ӿڣ� Ҳ����ͨ�������������� ӳ�䷽ʽ �������ݣ� Ҳ����ͨ�����������н�������Ȼ�������͵�ָ�����ݡ� 

##  IoTSharpֱ���豸�ͳ��������豸�������ϴ�



##  PushDataToMap
PushDataToMap  �Ǹ��ض����ؽӿڣ�ͨ���������ص�����ֵ�ýӿ��Զ�������������ݣ� ������ı������ַ���jsonҲ����ͨ�����ý��д��� 
http ���� 
```shell
curl --location --request POST  'http://iot.qhse.cn:2927/api/Devices/{����Token}/PushDataToMap/json' \
--header 'Content-Type: application/json' \
--data-raw '{
  "dev_id": "2021082640",
  "volt": 0,
  "sample_time": "2022-03-17 15:21:47",
  "datas": [
    {
      "point_name": "2",
      "mon_type": 4,
      "dev_type": 10,
      "depth": 0,
      "data1": 0
    }
  ]
}'
```

�������� ���£�
```json
{"dataType":"1","dataJson":"{\"serialNumber\":\"12003378\",\"uploadDate\":\"2022-03-20 22:22:19\",\"pm25\":21,\"pm10\":26,\"windSpeed\":25,\"windDirection\":14,\"noise\":46,\"temperature\":60,\"humidity\":900,\"sprayStatus\":0,\"warnReason\":64}"}
```
 
 �������òο�
 1. _map_to_attribute_{ӳ�䵽���豸����������}   ����ֵΪ�ڵ�ǰjson�е�·���� 
 ����: 
 ```
_map_to_attribute_currentAllowWeight	currentAllowWeight	 
_map_to_attribute_driverCardNo	driverCardNo	 
_map_to_attribute_version	version	
``` 

2. _map_to_devname  ָ���豸������ʹ���ĸ��ֶ� 
3. _map_to_devname_format ָ���豸���Ƶĸ�ʽ�����õı����� $devname  �� $subdevname�� ��ʽ����Ϊ	hf_crane_$devname 
4. _map_to_jsontext_in_json	ָ��������ı����͵Ľ��Զ����ַ���תΪjson��ʾ����Ϊ�� dataJson	 
5. _map_to_telemetry_{ӳ�䵽���豸�е�ң������}	   
```
_map_to_telemetry_windSpeed	windSpeed	 
```
 6. _map_to_subdevname ��������
 7. _map_to_data_in_array ������豸������ĳ������ռ�ã� ������ָ���� 

 ע�⣬ ��_map_to_data_in_array ָ�����ֶ�ʱ �� ʹ��  '@' ���ֶ�ָ������ ��json·���� ��ʹ�� ���ʾ��ǰ����Ԫ���е�·���� 
 _map_to_data_in_array��_map_to_jsontext_in_jsonֻ��ʹ������һ�֣� �����غϡ� 




