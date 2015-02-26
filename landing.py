#!/usr/bin/env python
from importd import d
import time

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


@d('/', name='index')
def home(request):
    import time
    return 'index.html', {'msg': time.time(),
                          'objs': ''}


@d('/view_template/<word:name>', name='view_template')  # named urls
def real_index(request, name):
    return name+'.html', {'msg': time.time()}


if __name__ == '__main__':
    d.main()
