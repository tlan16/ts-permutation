FROM alpine:3.13.5

ENV BASH_ENV=/root/.bash_profile


# region: setup environment
RUN apk add --no-cache --upgrade bash wget grep
RUN touch ~/.bash_profile
RUN ["/bin/bash", "-c", "wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash"]
# endregion

SHELL ["/bin/bash", "-o", "pipefail", "-c"]
WORKDIR /app
ADD . .

RUN echo "export NVM_DIR=${NVM_DIR}" > $HOME/.bashrc && \
    echo "source ${NVM_INSTALL_DIR}/nvm.sh" > $HOME/.bashrc && \
    source $HOME/.bashrc

# region: setup app dependencies and run test
#RUN ["/bin/bash", "-c", "nvm install --no-progress $(cat .nvmrc);"]
RUN nvm install --no-progress $(cat .nvmrc)
