FROM centos:7

RUN yum -y install -y gcc-c++ make
RUN curl -sL https://rpm.nodesource.com/setup_6.x | bash -
RUN yum -y install nodejs

COPY . /app

RUN sh /app/bin/deploy.sh