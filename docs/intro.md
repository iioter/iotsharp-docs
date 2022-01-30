---
sidebar_position: 1
---

# �ο��ֲ�

������̽��һ��  **IoTSharp ���������**.

## ��ʼ�˽�

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### ��Ҫ��Щ����?

- [Docker]](https://www.docker.com/) ���°汾
  - �����Ҫ����IoTSharp, ���������Ƽ�����docker�� �Լ�Docker-Compose, ͨ�������Ƽ���[docker-compose.yml](https://github.com/IoTSharp/IoTSharp/raw/master/Deployments/rabbit_mongo_influx/docker-compose.yml) �����ֱ�Ӳ���ɹ���������ɷ�����۵Ĳ��𻷾���
- ��ϵ�����ݿ�  
  - PostgreSQL ��֤���İ汾Ϊ  PostgreSQL 11.3,12.x�ȡ� 
  - MySql   ��֤���İ汾Ϊ MySQL 8.0.17  
  - Oracle  ��֤���İ汾Ϊ  Oracle Standard Edition 12c Release 2  �� ����ϵͳΪCent OS 7 
  - Sqlite  �������ã�����֤�� С��Ŀ�Ƽ��� 
  - SQLServer  ��֤���İ汾Ϊ Microsoft SQL Server 2016 (RTM-GDR) (KB4019088) - 13.0.1742.0 (X64)  
  - InMemory ͨ��EF ���ڴ����ݿ⣬һ�����ڲ��� �� 
- ʱ�����ݿ�
  - ͨ��EFCore ʹ�ù�ϵ�����ݿ����洢����ʱ��������ݣ���Ȼ���Ƽ�����������һ��С����Ŀ�����ѡ�� 
  - InfluxDB 2.x �����������Ƽ���ʱ�����ݿ⣬ InfluxDB���ɷǳ����õĿ��ӻ����ߣ� ���˲������Ŵ�û���κο����޵ġ�
  - TDengine  �����������Ƽ��Ĺ���ʱ�����ݿ⣬ ����Ϊ��֧�����һ��˴���ʱ���д�����ṩ���� [Maikebing.EntityFrameworkCore.Taos](https://github.com/maikebing/Maikebing.EntityFrameworkCore.Taos)
  - PinusDB  �����ɹ�ʱ�����ݿ⣬ �����ã� ����ҲΪ����д���ṩ���� [PinusDB.Data](https://github.com/maikebing/PinusDB.Data) 
  - TimescaleDB  ����PostgreSQL��ʱ�����ݿ⣬ �����ֱ��ѡ��������ʱ�����ݿ�Ҳ���Ե���ϵ�����ݿ⣬ һ�θ㶨�� 
  - ��ϵ���ݿ� ������ �� ������֧�����ַ�ʽ����ʼ�ղ��Ƽ�����������ֻ����һ�����ݿ���ͨ���������ܸ㶨����������� 
  - SingleTable  ͨ��EF�ĵĵ���洢�� ͨ������ ���ǾͲ���Ҫ���������ݿ���߷����ȵȡ� С��Ŀ�Ƽ��� 
- ��Ϣ����  ������ͨ��CAP��Ŀ��ʵ�ֵģ������֧�ֵ����������Ƕ�֧�֡� 
  - RabbitMQ �����Ƽ��ġ� 
  - Kafka   �����ƺ������� 
  - ZeroMQ  ��Գ��ŵ�ZeroMQ , ���Ǳ�д��MaiKeBing.CAP.ZeroMQ �� MaiKeBing.HostedService.ZeroMQ  ��֧������ 
  - InMemory ͨ�������Բ���Ҫ�����κ���ӣ� ����CAP�ṩ��һ��;���� С��Ŀ�Ƽ��� 
- ��Ϣ���д洢
  - PostgreSql ���ȫ����PostgreSQL ���Կ��ǡ� 
  - MongoDB  �����Ƽ���
  - LiteDB  .Net ��д��NoSQL ��Ŀ�� С��Ŀ�Ƽ��� 
  - InMemory �洢���ڴ棬 ����������ӡ� С��Ŀ�Ƽ��� 

## ��β���

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
