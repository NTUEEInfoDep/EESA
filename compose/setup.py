from setuptools import setup
setup(
    name = 'compose',
    version = '0.1.0',
    packages = ['compose'],
    entry_points = {
        'console_scripts': [
            'compose = compose.__main__:main'
        ]
    })