#!/usr/bin/env python
from importd import d

d(  # configure django
    DEBUG=True,
    SMART_RETURN=True,
    MIDDLEWARE_CLASSES=(
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        # 'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
    ),
    INSTALLED_APPS=[
                    # 'django_extensions',
                    # 'django.contrib.auth',
                    # 'django.contrib.contenttypes',
                    # 'django.contrib.sessions',
                    # 'django.contrib.admin',
                    'debug_toolbar',
                    'crispy_forms',

                    # project apps
                    'mailing',
                    ],
    CRISPY_TEMPLATE_PACK='bootstrap3',
    STATICFILES_DIRS=['static', ],
)

var = {'paises': '5',
       'cidades': '20',
       'pedidos': '3000',
       'anjos': '9500',
       }


@d('/')
def index(request):
    return 'index.html', var


@d('/en/')
def index_en(request):
    return 'index-en.html', var


@d('/es/')
def index_es(request):
    return 'index-es.html', var


@d('/view_template/<word:name>', name='view_template')  # named urls
def real_index(request, name):
    return name+'.html'


if __name__ == '__main__':
    d.main()
