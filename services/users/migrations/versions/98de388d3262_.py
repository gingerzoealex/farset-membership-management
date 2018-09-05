"""empty message

Revision ID: 98de388d3262
Revises: f127120d3cb8
Create Date: 2017-10-24 23:25:00.090591

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "98de388d3262"
down_revision = "f127120d3cb8"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("users", sa.Column("password", sa.String(length=255), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("users", "password")
    # ### end Alembic commands ###