---
sidebar_position: 1
---

#  MQTTЭ��

�����½������ͨ��MQTT����ң������������ϴ��Լ�RPC���Ƶ�ʵ�֡� 

##  �������Ժ�ң������

�豸��ֱ���豸�������豸�� �������ݷ�ʽҲ������ͬ�� telemetry Ϊ ң�⣬ attributes��ʾ���ԣ��ͻ����ϴ��������ڷ���������ԶΪ ClientSide �� ���ͻ��˲����ԡ� ���Ƽ��ڷ�����޸ġ� 

### ֱ���豸����ң������

``` 
devices/me/telemetry
devices/me/attributes
```
 
### �����豸����ң������
```
devices/{�豸����}/telemetry
devices/{�豸����}/attributes
```
 {�豸����} ����������ǰ�����豸������豸���ơ� 
 MQTT�ĸ���Ϊ���¸�ʽ

 ```json
 {
   "stringvalue":"here is strvalue",
   "intvalue":234
 }
 ```


### �����豸���������豸ң�����ݺ���������

``` 
gateway/telemetry
gateway/attributes
```
�����������ݸ�ʽ���£�
```json
{
    "subdevice1": [
        {
            "ts": 637834108219892435,
            "devicestatus": 0,
            "values": {
                "string": "this string",
                "float": 22.222
            }
        }
    ],
    "subdevice2": [
        {
            "ts": 637834108219892435,
            "devicestatus": 0,
            "values": {
                "intvalue": 22
            }
        }
    ]
}

```
������һ��C#�ϳ������ϴ�������
```cs
 Dictionary<string, List<Playload>> pairs = new Dictionary<string, List<Playload>>();
            var plst = new List<Playload>();
            var values = new Dictionary<string, object>();
            values.Add("string", "this string");
            values.Add("intvalue",22);
            plst.Add(new Playload() { DeviceStatus = DeviceStatus.Good, Ticks = DateTime.Now.Ticks, Values = values });
            values.Add("float", 22.222);
            plst.Add(new Playload() { DeviceStatus = DeviceStatus.Bad, Ticks = DateTime.Now.Ticks, Values = values });
            pairs.Add("subdevice1",plst);
            pairs.Add("subdevice2", plst);
         var str=    Newtonsoft.Json.JsonConvert.SerializeObject(pairs);
            Console.WriteLine(str); 
```

 
 ##  ��������

 ###  ֱ���豸��������

��������
```
  devices/me/attributes/request/{����Ψһ��ʶ}
```
���Ľ��
```
 devices/me/attributes/response/{����Ψһ��ʶ}
```


 ###  �����豸��������

��������
```
  devices/{�豸����}/attributes/request/{����Ψһ��ʶ}
```
���Ľ��
```
 devices/{�豸����}/attributes/response/{����Ψһ��ʶ}
```

## ��������RPCԶ�̿���

����RPC������ָ �ն��豸Զ�̵��÷���˵����ݣ� IoTSharp �յ�����������ù������� ������ڹ������д�������� ���ڹ�������鿴����½ڡ� 

```
  devices/{�豸����}/rpc/request/{��������}
```

�豸�������������ֱ���豸�� ��Ϊme�� ����������豸�� �����豸���ƣ� {��������}������������˺��ַ����� ���ｻ�ɹ��������� ͨ���������� ����Ե��� �ڲ����� Ҳ���Ե����ⲿ����ȣ� �����������ͺá� 


##  ��������RPCԶ�̿���

����RPC��ָƽ̨�˻��ߵ������������IoTSharp����Զ�̿����ն��豸�ķ����� 

ͨ��MQTT����ʱ�� �ȶ���response�� Ȼ�󷢲�request�� 
```
 devices/{�豸����}/rpc/request/{��������}/{����Ψһ��ʶ}
 devices/{�豸����}/rpc/response/{��������}/{����Ψһ��ʶ}
```

�������������ʱ���ǽ���ͨ��ͨ�� Web Api ���� ʾ������

```sh
curl -X 'POST' \
  'https://cloud.iotsharp.net/api/Devices/{�豸��TOKEN}/Rpc/{��������}?timeout={��ʱʱ��}' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '"{������ ������json}"'

```