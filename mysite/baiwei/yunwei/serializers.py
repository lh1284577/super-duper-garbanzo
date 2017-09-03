from rest_framework import serializers
from yunwei.models import BLOG


class BLOGSerializer(serializers.ModelSerializer):
    class Meta:
        model = BLOG
        fields = '__all__'
