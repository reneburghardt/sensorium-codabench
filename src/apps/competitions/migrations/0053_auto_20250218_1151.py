# Generated by Django 2.2.28 on 2025-02-18 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('competitions', '0052_auto_20250129_1058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submission',
            name='detailed_result_file_size',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=15, null=True),
        ),
        migrations.AlterField(
            model_name='submission',
            name='prediction_result_file_size',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=15, null=True),
        ),
        migrations.AlterField(
            model_name='submission',
            name='scoring_result_file_size',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=15, null=True),
        ),
    ]
